#!/usr/bin/env node

/**
 * Check for i18n key leaks in the codebase
 * This script scans for common patterns that indicate missing translations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load available translation keys
function loadTranslationKeys() {
  const enPath = path.join(process.cwd(), 'src/i18n/en.json');
  const thPath = path.join(process.cwd(), 'src/i18n/th.json');
  
  let enKeys = new Set();
  let thKeys = new Set();
  
  try {
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
    const thContent = JSON.parse(fs.readFileSync(thPath, 'utf-8'));
    
    function extractKeys(obj, prefix = '') {
      for (const key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          extractKeys(obj[key], fullKey);
        } else {
          enKeys.add(fullKey);
          thKeys.add(fullKey);
        }
      }
    }
    
    extractKeys(enContent);
    extractKeys(thContent);
  } catch (error) {
    console.warn('⚠️  Could not load translation files:', error.message);
  }
  
  return { enKeys, thKeys };
}

const { enKeys, thKeys } = loadTranslationKeys();
const knownNamespaces = new Set([...enKeys, ...thKeys].map((k) => k.split('.')[0]));

const PATTERNS = [
  // Common i18n key patterns that should not appear in rendered output
  /\b[a-z]+\.[a-z_]+\b/g, // Simple dot notation (e.g., "resources.title")
  /\{\{[^}]+\}\}/g,        // Template literals (e.g., "{{key}}")
  /\$t\([^)]+\)/g,         // Vue-style i18n (e.g., "$t('key')")
];

const WHITELIST = [
  // Technical terms that are intentionally mixed
  'api.', 'app.', 'dev.', 'www.', 'http.', 'https.', 'localhost.',
  // File extensions
  '.tsx', '.ts', '.jsx', '.js', '.json', '.md', '.css', '.html', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp',
  '.ico', '.xml', '.webmanifest',
  // Common abbreviations
  'e.g.', 'i.e.', 'etc.', 'vs.', 'fig.', 'sec.', 'min.', 'max.',
  // Common technical terms
  'config.', 'data.', 'meta.', 'props.', 'state.', 'ref.', 'ctx.', 'req.', 'res.', 'err.', 'log.',
  // URLs and paths
  'http://', 'https://', 'ftp://', 'ws://', 'wss://',
  // Next.js specific
  'use(', 'get(', 'set(', 'has(', 'map.', 'filter.', 'reduce.', 'find.', 'some.', 'every.',
  // React specific
  'useState(', 'useEffect(', 'useRef(', 'useMemo(', 'useCallback(',
  // Styling
  'className=', 'style=', 'class=', 'id=', 'href=', 'src=', 'alt=', 'title=', 'aria-',
];

let issues = [];
let translationKeyUsage = [];

function hasTranslationKey(key) {
  if (enKeys.has(key) || thKeys.has(key)) return true;

  // Support scoped translators: t('filters.all') could map to services.filters.all, nav.filters.all, etc.
  for (const ns of knownNamespaces) {
    const candidate = `${ns}.${key}`;
    if (enKeys.has(candidate) || thKeys.has(candidate)) return true;
  }

  return false;
}

function extractStringLiterals(line) {
  // Extract contents of '...', "...", and `...` literals (best-effort, line-local).
  const results = [];
  const regex = /(["'`])((?:\\.|(?!\1)[^\\])*)\1/g;
  let match;
  while ((match = regex.exec(line)) !== null) {
    const literal = match[2];
    // Ignore template literals containing expressions like ${...} (not rendered text)
    if (literal.includes('${')) continue;
    // Ignore URLs/emails (not i18n keys rendered as text)
    if (/^https?:\/\//i.test(literal) || literal.startsWith('//') || literal.includes('@')) continue;
    results.push(literal);
  }
  return results;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Skip comments and imports
    if (trimmedLine.startsWith('//') ||
        trimmedLine.startsWith('/*') ||
        trimmedLine.startsWith('*') ||
        trimmedLine.startsWith('import') ||
        trimmedLine.startsWith('export') ||
        trimmedLine.startsWith('from ')) {
      return;
    }

    // Only scan inside string literals to avoid flagging code like process.env, console.warn, etc.
    const stringLiterals = extractStringLiterals(line);
    stringLiterals.forEach((literal) => {
      PATTERNS.forEach((pattern) => {
        const matches = literal.match(pattern);
        if (!matches) return;

        matches.forEach((match) => {
          // For dot-notation matches, only flag known translation namespaces to avoid domains and misc strings.
          if (pattern === PATTERNS[0] && match.includes('.')) {
            const ns = match.split('.')[0];
            if (!knownNamespaces.has(ns)) return;
          }

          const isWhitelisted = WHITELIST.some((wl) => match.includes(wl));
          if (isWhitelisted) return;

          issues.push({
            file: filePath,
            line: index + 1,
            match,
            content: trimmedLine.substring(0, 100),
          });
        });
      });
    });
    
    // Check for useTranslations usage and verify keys exist
    // Avoid false positives like `.get('page')` (contains `t('page')` substring).
    const tRegex = /(^|[^\w])t\(['"]([^'"]+)['"]\)/g;
    let m;
    while ((m = tRegex.exec(line)) !== null) {
      const key = m[2];
      // Only warn when we can't resolve it to any translation key (supports scoped usage).
      if (!hasTranslationKey(key)) {
        translationKeyUsage.push({
          file: filePath,
          line: index + 1,
          key,
          content: trimmedLine.substring(0, 100),
        });
      }
    }
  });
}

function scanDirectory(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  try {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      let stat;
      try {
        stat = fs.statSync(filePath);
      } catch (e) {
        return; // Skip files that can't be accessed
      }

      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (!['node_modules', '.next', 'dist', 'build', '.git', 'coverage', '.turbo'].includes(file) && !file.startsWith('.')) {
          // Skip API handlers and low-signal directories for i18n leak checks.
          if (filePath.includes(`${path.sep}src${path.sep}app${path.sep}api${path.sep}`)) return;
          scanDirectory(filePath, extensions);
        }
      } else {
        const ext = path.extname(file);
        if (extensions.includes(ext)) {
          checkFile(filePath);
        }
      }
    });
  } catch (error) {
    console.warn(`⚠️  Could not scan directory ${dir}:`, error.message);
  }
}

// Check for mixed language in same file (TH/EN)
function checkMixedLanguage(dir) {
  console.log('🔍 Checking for mixed languages...\n');
  
  const mixedLanguageIssues = [];
  
  function checkFileForMixedLanguage(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const lines = content.split('\n');
      
      lines.forEach((line, index) => {
        const trimmedLine = line.trim();
        // Skip comments
        if (trimmedLine.startsWith('//') ||
            trimmedLine.startsWith('/*') ||
            trimmedLine.startsWith('*') ||
            trimmedLine.startsWith('import') ||
            trimmedLine.startsWith('export')) {
          return;
        }
        
        // Check for Thai characters mixed with English letters
        const hasThai = /[\u0E00-\u0E7F]/.test(line);
        const hasEnglish = /[a-zA-Z]/.test(line);
        
        if (hasThai && hasEnglish) {
          // Check if it's a string literal (which is okay for translations)
          const inString = /["'`][^"'`]*[\u0E00-\u0E7F][^"'`]*["'`]/.test(line);
          
          // Allow mixed language in translation files or string literals
          if (!filePath.includes('i18n') && !inString) {
            mixedLanguageIssues.push({
              file: filePath,
              line: index + 1,
              content: trimmedLine.substring(0, 100)
            });
          }
        }
      });
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  function scanDirectoryForMixedLanguage(dir) {
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
          if (!['node_modules', '.next', 'dist', 'build', '.git', 'coverage', '.turbo'].includes(file) && !file.startsWith('.')) {
            scanDirectoryForMixedLanguage(filePath);
          }
        } else {
          const ext = path.extname(file);
          if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
            checkFileForMixedLanguage(filePath);
          }
        }
      });
    } catch (error) {
      // Skip directories that can't be accessed
    }
  }
  
  scanDirectoryForMixedLanguage(dir);
  
  if (mixedLanguageIssues.length > 0) {
    console.log(`⚠️  Found ${mixedLanguageIssues.length} potential mixed language issues:\n`);
    mixedLanguageIssues.slice(0, 20).forEach(issue => {
      console.log(`${issue.file}:${issue.line}`);
      console.log(`  ${issue.content}...`);
      console.log('');
    });
    if (mixedLanguageIssues.length > 20) {
      console.log(`... and ${mixedLanguageIssues.length - 20} more`);
    }
  } else {
    console.log('✅ No mixed language issues found!\n');
  }
}

// Check for missing translation keys
function checkMissingTranslations() {
  console.log('🔍 Checking for missing translation keys...\n');
  
  const enPath = path.join(process.cwd(), 'src/i18n/en.json');
  const thPath = path.join(process.cwd(), 'src/i18n/th.json');
  
  let missingInEn = [];
  let missingInTh = [];
  
  try {
    const enContent = JSON.parse(fs.readFileSync(enPath, 'utf-8'));
    const thContent = JSON.parse(fs.readFileSync(thPath, 'utf-8'));
    
    function getKeys(obj, prefix = '') {
      const keys = [];
      for (const key in obj) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          keys.push(...getKeys(obj[key], fullKey));
        } else {
          keys.push(fullKey);
        }
      }
      return keys;
    }
    
    const enKeyList = getKeys(enContent);
    const thKeyList = getKeys(thContent);
    
    missingInEn = thKeyList.filter(key => !enKeyList.includes(key));
    missingInTh = enKeyList.filter(key => !thKeyList.includes(key));
    
    if (missingInEn.length > 0) {
      console.log(`⚠️  Keys missing in en.json (${missingInEn.length}):`);
      missingInEn.forEach(key => console.log(`  - ${key}`));
      console.log('');
    }
    
    if (missingInTh.length > 0) {
      console.log(`⚠️  Keys missing in th.json (${missingInTh.length}):`);
      missingInTh.forEach(key => console.log(`  - ${key}`));
      console.log('');
    }
    
    if (missingInEn.length === 0 && missingInTh.length === 0) {
      console.log('✅ All translation keys are present in both languages!\n');
    }
  } catch (error) {
    console.warn('⚠️  Could not check for missing translations:', error.message);
  }
  
  return missingInEn.length + missingInTh.length;
}

// Main execution
console.log('🔍 Checking for i18n key leaks...\n');

const srcPath = path.join(process.cwd(), 'src');
scanDirectory(srcPath);

let exitCode = 0;

if (issues.length > 0) {
  console.log(`❌ Found ${issues.length} potential i18n key leaks:\n`);
  issues.slice(0, 20).forEach(issue => {
    console.log(`${issue.file}:${issue.line}`);
    console.log(`  Match: "${issue.match}"`);
    console.log(`  Line: ${issue.content}...`);
    console.log('');
  });
  if (issues.length > 20) {
    console.log(`... and ${issues.length - 20} more`);
  }
  exitCode = 1;
} else {
  console.log('✅ No i18n key leaks found!\n');
}

if (translationKeyUsage.length > 0) {
  console.log(`⚠️  Found ${translationKeyUsage.length} potentially missing translation keys:\n`);
  translationKeyUsage.slice(0, 20).forEach(issue => {
    console.log(`${issue.file}:${issue.line}`);
    console.log(`  Key: "${issue.key}"`);
    console.log(`  Line: ${issue.content}...`);
    console.log('');
  });
  if (translationKeyUsage.length > 20) {
    console.log(`... and ${translationKeyUsage.length - 20} more`);
  }
  exitCode = 1;
}

// Check for missing translations
const missingTranslations = checkMissingTranslations();
if (missingTranslations > 0) {
  exitCode = 1;
}

// Check for mixed language
checkMixedLanguage(srcPath);

console.log('\n✨ i18n check complete!');
process.exit(exitCode);
