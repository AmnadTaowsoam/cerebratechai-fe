#!/usr/bin/env node

/**
 * Check for broken links in the codebase
 * This script scans for internal and external links and validates them
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const CONFIG = {
  // Skip external link checking in CI to speed up tests
  skipExternal: process.env.CI === 'true',
  // Timeout for link checking (ms)
  timeout: 5000,
  // User agent for requests
  userAgent: 'Mozilla/5.0 (compatible; LinkChecker/1.0)',
  // Maximum concurrent requests
  maxConcurrent: 10,
};

// Store all found links
const links = {
  internal: new Map(),
  external: new Map(),
};

// Store all defined routes
const definedRoutes = new Set();

// Patterns to find links
const LINK_PATTERNS = [
  // href attributes
  /href=["']([^"']+)["']/g,
  // src attributes
  /src=["']([^"']+)["']/g,
  // useRouter().push() calls
  /push\(["']([^"']+)["']\)/g,
  // router.push() calls
  /router\.push\(["']([^"']+)["']\)/g,
  // window.location
  /window\.location\s*=\s*["']([^"']+)["']/g,
  // <a> tags with href
  /<a\s+[^>]*href=["']([^"']+)["']/gi,
];

// Skip patterns (links that should not be checked)
const SKIP_PATTERNS = [
  /^mailto:/,
  /^tel:/,
  /^javascript:/,
  /^#/,
  /^\/\//, // Protocol-relative URLs
  /^data:/,
  /^blob:/,
  /^about:/,
  /^chrome-extension:/,
  /^moz-extension:/,
  /^edge-extension:/,
  // Skip preconnect hosts (not valid HTTP endpoints by themselves)
  /^https?:\/\/fonts\.googleapis\.com\/?$/,
  /^https?:\/\/fonts\.gstatic\.com\/?$/,
  // Skip localhost links in CI
  /^http:\/\/localhost/,
  /^http:\/\/127\.0\.0\.1/,
  /^http:\/\/0\.0\.0\.0/,
  // Skip common external services
  /^https?:\/\/(www\.)?(google\.com|facebook\.com|twitter\.com|linkedin\.com|instagram\.com|youtube\.com)/,
];

// Extract routes from Next.js app directory
function extractRoutes(dir, basePath = '') {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Skip special directories
        if (
          [
            'api',
            '_not-found',
            'layout.tsx',
            'layout.js',
            'page.tsx',
            'page.js',
            'loading.tsx',
            'loading.js',
            'error.tsx',
            'error.js',
            'not-found.tsx',
            'not-found.js',
          ].includes(file)
        ) {
          return;
        }

        // Handle dynamic routes [slug] -> :slug
        const routeSegment =
          file.startsWith('[') && file.endsWith(']')
            ? `:${file.slice(1, -1)}`
            : file;
        const nextBasePath = basePath
          ? `${basePath}/${routeSegment}`
          : `/${routeSegment}`;
        extractRoutes(filePath, nextBasePath);
      } else if (
        file === 'page.tsx' ||
        file === 'page.js' ||
        file === 'route.ts' ||
        file === 'route.js'
      ) {
        // This is a page route or a file route (e.g. /rss.xml)
        definedRoutes.add(basePath || '/');
      }
    });
  } catch (error) {
    // Skip directories that can't be accessed
  }
}

// Check if a URL is internal
function isInternal(url) {
  return url.startsWith('/') && !url.startsWith('//');
}

// Normalize URL for comparison
function normalizeUrl(url) {
  // Remove trailing slash for comparison
  return url.replace(/\/$/, '') || '/';
}

// Check if a link should be skipped
function shouldSkipLink(url) {
  if (url.includes('${')) return true;
  return SKIP_PATTERNS.some(pattern => pattern.test(url));
}

function routeToRegex(routePattern) {
  // Convert /:locale/blog/:slug -> ^/[^/]+/blog/[^/]+$
  if (routePattern === '/' || routePattern === '') return /^\/$/;

  const parts = routePattern
    .split('/')
    .filter(Boolean)
    .map(segment => {
      if (segment.startsWith(':')) return '[^/]+';
      return segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    });

  return new RegExp(`^/${parts.join('/')}$`);
}

function isRouteDefined(url) {
  const normalized = normalizeUrl(url);
  if (definedRoutes.has(normalized)) return true;

  for (const route of definedRoutes) {
    if (!route.includes(':')) continue;
    const re = routeToRegex(route);
    if (re.test(normalized)) return true;
  }

  return false;
}

// Extract links from a file
function extractLinksFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      if (
        trimmedLine.startsWith('//') ||
        trimmedLine.startsWith('*') ||
        trimmedLine.startsWith('/*') ||
        trimmedLine.includes('{/*') ||
        trimmedLine.includes('*/}')
      ) {
        return;
      }

      LINK_PATTERNS.forEach(pattern => {
        let match;
        while ((match = pattern.exec(line)) !== null) {
          const url = match[1];

          // Skip if should be skipped
          if (shouldSkipLink(url)) {
            return;
          }

          const linkInfo = {
            file: filePath,
            line: index + 1,
            url: url,
          };

          if (isInternal(url)) {
            const normalized = normalizeUrl(url);
            if (!links.internal.has(normalized)) {
              links.internal.set(normalized, []);
            }
            links.internal.get(normalized).push(linkInfo);
          } else {
            const normalized = url;
            if (!links.external.has(normalized)) {
              links.external.set(normalized, []);
            }
            links.external.get(normalized).push(linkInfo);
          }
        }
      });
    });
  } catch (error) {
    // Skip files that can't be read
  }
}

// Scan directory for links
function scanDirectory(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(filePath);
      } catch (e) {
        return;
      }

      if (stat.isDirectory()) {
        if (
          ![
            'node_modules',
            '.next',
            'dist',
            'build',
            '.git',
            'coverage',
            '.turbo',
            'public',
          ].includes(file) &&
          !file.startsWith('.')
        ) {
          scanDirectory(filePath, extensions);
        }
      } else {
        const ext = path.extname(file);
        if (extensions.includes(ext)) {
          extractLinksFromFile(filePath);
        }
      }
    });
  } catch (error) {
    // Skip directories that can't be accessed
  }
}

// Check external link with HTTP request
function checkExternalLink(url) {
  return new Promise(resolve => {
    try {
      const parsedUrl = new URL(url);
      const client = parsedUrl.protocol === 'https:' ? https : http;

      const options = {
        method: 'HEAD',
        headers: {
          'User-Agent': CONFIG.userAgent,
        },
        timeout: CONFIG.timeout,
      };

      const req = client.request(parsedUrl, options, res => {
        resolve({
          url: url,
          status: res.statusCode,
          valid: res.statusCode >= 200 && res.statusCode < 400,
        });
      });

      req.on('error', error => {
        resolve({
          url: url,
          status: 'ERROR',
          valid: false,
          error: error.message,
        });
      });

      req.on('timeout', () => {
        req.destroy();
        resolve({
          url: url,
          status: 'TIMEOUT',
          valid: false,
          error: 'Request timeout',
        });
      });

      req.end();
    } catch (error) {
      resolve({
        url: url,
        status: 'ERROR',
        valid: false,
        error: error.message,
      });
    }
  });
}

// Check external links with concurrency limit
async function checkExternalLinks() {
  if (CONFIG.skipExternal) {
    console.log('⏭️  Skipping external link checks in CI mode\n');
    return [];
  }

  const urls = Array.from(links.external.keys());
  const results = [];

  console.log(`🔍 Checking ${urls.length} external links...\n`);

  for (let i = 0; i < urls.length; i += CONFIG.maxConcurrent) {
    const batch = urls.slice(i, i + CONFIG.maxConcurrent);
    const batchResults = await Promise.all(batch.map(checkExternalLink));
    results.push(...batchResults);

    // Show progress
    const checked = Math.min(i + CONFIG.maxConcurrent, urls.length);
    console.log(`  Progress: ${checked}/${urls.length} links checked`);
  }

  return results;
}

// Main execution
async function main() {
  console.log('🔍 Checking for broken links...\n');

  const srcPath = path.join(process.cwd(), 'src');
  const appPath = path.join(srcPath, 'app');

  // Extract defined routes
  console.log('📋 Extracting defined routes...');
  extractRoutes(appPath);
  console.log(`   Found ${definedRoutes.size} defined routes\n`);

  // Scan for links
  console.log('🔎 Scanning for links...');
  scanDirectory(srcPath);
  console.log(`   Found ${links.internal.size} internal links`);
  console.log(`   Found ${links.external.size} external links\n`);

  let exitCode = 0;

  // Check internal links
  console.log('🔍 Checking internal links...\n');
  const brokenInternalLinks = [];

  links.internal.forEach((occurrences, url) => {
    const normalized = normalizeUrl(url);

    // Check if it's a dynamic route (contains :param)
    if (normalized.includes(':')) {
      return; // Skip dynamic routes
    }

    // Check if route exists
    if (!isRouteDefined(normalized)) {
      // Also check if it's a file in public directory
      const publicPath = path.join(
        process.cwd(),
        'public',
        normalized.replace(/^\//, '')
      );
      const fileExists = fs.existsSync(publicPath);

      if (!fileExists) {
        brokenInternalLinks.push({
          url: url,
          occurrences: occurrences,
        });
      }
    }
  });

  if (brokenInternalLinks.length > 0) {
    console.log(
      `❌ Found ${brokenInternalLinks.length} broken internal links:\n`
    );
    brokenInternalLinks.slice(0, 20).forEach(link => {
      console.log(`  Link: ${link.url}`);
      link.occurrences.slice(0, 3).forEach(occ => {
        console.log(`    ${occ.file}:${occ.line}`);
      });
      if (link.occurrences.length > 3) {
        console.log(`    ... and ${link.occurrences.length - 3} more`);
      }
      console.log('');
    });
    if (brokenInternalLinks.length > 20) {
      console.log(`... and ${brokenInternalLinks.length - 20} more`);
    }
    exitCode = 1;
  } else {
    console.log('✅ All internal links are valid!\n');
  }

  // Check external links
  const externalResults = await checkExternalLinks();
  const brokenExternalLinks = externalResults.filter(r => !r.valid);

  if (brokenExternalLinks.length > 0) {
    console.log(
      `\n❌ Found ${brokenExternalLinks.length} broken external links:\n`
    );
    brokenExternalLinks.slice(0, 20).forEach(link => {
      console.log(`  ${link.url}`);
      console.log(
        `    Status: ${link.status}${link.error ? ` (${link.error})` : ''}`
      );
      const occurrences = links.external.get(link.url) || [];
      occurrences.slice(0, 3).forEach(occ => {
        console.log(`    ${occ.file}:${occ.line}`);
      });
      if (occurrences.length > 3) {
        console.log(`    ... and ${occurrences.length - 3} more`);
      }
      console.log('');
    });
    if (brokenExternalLinks.length > 20) {
      console.log(`... and ${brokenExternalLinks.length - 20} more`);
    }
    exitCode = 1;
  } else if (!CONFIG.skipExternal) {
    console.log('✅ All external links are valid!\n');
  }

  console.log('\n✨ Link check complete!');
  process.exit(exitCode);
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
