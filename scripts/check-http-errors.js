#!/usr/bin/env node

/**
 * Check for potential 4xx-5xx HTTP errors in the codebase
 * This script scans for patterns that might cause HTTP errors
 */

const fs = require('fs');
const path = require('path');

// Patterns that might cause 4xx errors
const CLIENT_ERROR_PATTERNS = [
  // Missing error handling for fetch/axios
  {
    pattern: /(?:fetch|axios|request)\([^)]+\)[^;]*$/gm,
    type: 'missing-error-handling',
    severity: 'warning',
    message: 'Fetch/axios call without error handling',
  },
  // Hardcoded URLs that might not exist
  {
    pattern: /(?:fetch|axios)\(['"`](https?:\/\/[^'"`]+)['"`]\)/g,
    type: 'hardcoded-url',
    severity: 'warning',
    message: 'Hardcoded URL in fetch/axios call',
  },
  // Missing Content-Type header for POST/PUT
  {
    pattern: /(?:method:\s*['"`](POST|PUT)['"`]|fetch\([^,]+,\s*\{[^}]*method:\s*['"`](POST|PUT)['"`])/gi,
    type: 'missing-content-type',
    severity: 'warning',
    message: 'POST/PUT request might be missing Content-Type header',
  },
];

// Patterns that might cause 5xx errors
const SERVER_ERROR_PATTERNS = [
  // Unhandled promise rejections
  {
    pattern: /async\s+\w+\([^)]*\)\s*\{[^}]*return\s+await\s+[^;]+;[^}]*\}/g,
    type: 'unhandled-async',
    severity: 'error',
    message: 'Async function without try-catch block',
  },
  // Missing error boundaries
  {
    pattern: /<ErrorBoundary[^>]*>/g,
    type: 'error-boundary',
    severity: 'info',
    message: 'ErrorBoundary component found',
  },
  // API routes without error handling
  {
    pattern: /export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH)\([^)]*\)\s*\{[^}]*return\s+Response/g,
    type: 'api-route-error-handling',
    severity: 'warning',
    message: 'API route without explicit error handling',
  },
];

// Patterns for proper error handling
const ERROR_HANDLING_PATTERNS = [
  /try\s*\{[\s\S]*?\}\s*catch\s*\([^)]*\)\s*\{[\s\S]*?\}/g,
  /\.catch\s*\([^)]*\)\s*\{[^}]*\}/g,
  /async\s+\w+\([^)]*\)\s*\{[\s\S]*?try\s*\{/g,
];

// API route patterns
const API_ROUTE_PATTERNS = [
  /export\s+async\s+function\s+(GET|POST|PUT|DELETE|PATCH)\s*\(/g,
  /export\s+const\s+(GET|POST|PUT|DELETE|PATCH)\s*=\s*async\s*\(/g,
];

let issues = [];
let apiRoutes = [];
let errorBoundaries = [];

function checkFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    // Check for API routes
    const apiMatches = content.matchAll(API_ROUTE_PATTERNS[0]) || content.matchAll(API_ROUTE_PATTERNS[1]);
    for (const match of apiMatches) {
      const method = match[1];
      // Find line number
      const lineIndex = content.substring(0, match.index).split('\n').length - 1;
      apiRoutes.push({
        file: filePath,
        line: lineIndex + 1,
        method: method,
      });
    }
    
    // Check for ErrorBoundary usage
    const errorBoundaryMatches = content.matchAll(SERVER_ERROR_PATTERNS[1].pattern);
    for (const match of errorBoundaryMatches) {
      const lineIndex = content.substring(0, match.index).split('\n').length - 1;
      errorBoundaries.push({
        file: filePath,
        line: lineIndex + 1,
      });
    }
    
    // Check each line for issues
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Skip comments and imports
      if (trimmedLine.startsWith('//') ||
          trimmedLine.startsWith('/*') ||
          trimmedLine.startsWith('*') ||
          trimmedLine.startsWith('import') ||
          trimmedLine.startsWith('export')) {
        return;
      }
      
      // Check client error patterns
      CLIENT_ERROR_PATTERNS.forEach(({ pattern, type, severity, message }) => {
        const matches = line.match(pattern);
        if (matches) {
          // Check if there's error handling nearby
          const hasErrorHandling = ERROR_HANDLING_PATTERNS.some(ep => 
            lines.slice(Math.max(0, index - 5), index + 5).join('\n').match(ep)
          );
          
          if (!hasErrorHandling || type !== 'missing-error-handling') {
            issues.push({
              file: filePath,
              line: index + 1,
              type: type,
              severity: severity,
              message: message,
              content: trimmedLine.substring(0, 100),
            });
          }
        }
      });
      
      // Check server error patterns
      SERVER_ERROR_PATTERNS.forEach(({ pattern, type, severity, message }) => {
        if (type === 'error-boundary') {
          return; // Already handled separately
        }
        
        const matches = line.match(pattern);
        if (matches) {
          // For API routes, check if they have error handling
          if (type === 'api-route-error-handling') {
            const functionContent = extractFunctionContent(content, index);
            const hasErrorHandling = functionContent.match(/try\s*\{/) || 
                                    functionContent.match(/catch\s*\(/);
            
            if (!hasErrorHandling) {
              issues.push({
                file: filePath,
                line: index + 1,
                type: type,
                severity: severity,
                message: message,
                content: trimmedLine.substring(0, 100),
              });
            }
          } else {
            issues.push({
              file: filePath,
              line: index + 1,
              type: type,
              severity: severity,
              message: message,
              content: trimmedLine.substring(0, 100),
            });
          }
        }
      });
    });
  } catch (error) {
    // Skip files that can't be read
  }
}

// Extract function content starting from a given line
function extractFunctionContent(content, startLine) {
  const lines = content.split('\n');
  let braceCount = 0;
  let foundStart = false;
  let result = '';
  
  for (let i = startLine; i < lines.length; i++) {
    const line = lines[i];
    
    if (!foundStart && line.includes('{')) {
      foundStart = true;
    }
    
    if (foundStart) {
      result += line + '\n';
      
      // Count braces
      for (const char of line) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      if (braceCount === 0) {
        break;
      }
    }
  }
  
  return result;
}

// Scan directory
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
        if (!['node_modules', '.next', 'dist', 'build', '.git', 'coverage', '.turbo'].includes(file) && !file.startsWith('.')) {
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
    // Skip directories that can't be accessed
  }
}

// Check API routes specifically
function checkApiRoutes() {
  console.log('🔍 Checking API routes...\n');
  
  const apiPath = path.join(process.cwd(), 'src/app/api');
  
  if (fs.existsSync(apiPath)) {
    scanDirectory(apiPath);
  }
  
  if (apiRoutes.length > 0) {
    console.log(`📋 Found ${apiRoutes.length} API route handlers:\n`);
    apiRoutes.forEach(route => {
      console.log(`  ${route.file}:${route.line} - ${route.method}`);
    });
    console.log('');
  } else {
    console.log('ℹ️  No API routes found\n');
  }
}

// Check for ErrorBoundary usage
function checkErrorBoundaries() {
  console.log('🔍 Checking for ErrorBoundary usage...\n');
  
  if (errorBoundaries.length > 0) {
    console.log(`✅ Found ${errorBoundaries.length} ErrorBoundary components:\n`);
    errorBoundaries.forEach(eb => {
      console.log(`  ${eb.file}:${eb.line}`);
    });
    console.log('');
  } else {
    console.log('⚠️  No ErrorBoundary components found. Consider adding error boundaries to handle runtime errors.\n');
  }
}

// Main execution
async function main() {
  console.log('🔍 Checking for potential 4xx-5xx HTTP errors...\n');
  
  const srcPath = path.join(process.cwd(), 'src');
  scanDirectory(srcPath);
  
  // Check API routes
  checkApiRoutes();
  
  // Check ErrorBoundary usage
  checkErrorBoundaries();
  
  // Report issues
  if (issues.length > 0) {
    const errors = issues.filter(i => i.severity === 'error');
    const warnings = issues.filter(i => i.severity === 'warning');
    
    if (errors.length > 0) {
      console.log(`❌ Found ${errors.length} potential errors:\n`);
      errors.slice(0, 10).forEach(issue => {
        console.log(`  ${issue.file}:${issue.line}`);
        console.log(`    [${issue.type}] ${issue.message}`);
        console.log(`    ${issue.content}...`);
        console.log('');
      });
      if (errors.length > 10) {
        console.log(`... and ${errors.length - 10} more`);
      }
    }
    
    if (warnings.length > 0) {
      console.log(`⚠️  Found ${warnings.length} warnings:\n`);
      warnings.slice(0, 10).forEach(issue => {
        console.log(`  ${issue.file}:${issue.line}`);
        console.log(`    [${issue.type}] ${issue.message}`);
        console.log(`    ${issue.content}...`);
        console.log('');
      });
      if (warnings.length > 10) {
        console.log(`... and ${warnings.length - 10} more`);
      }
    }
    
    // Fail only when potential errors are detected (warnings do not fail CI).
    if (errors.length > 0) {
      process.exit(1);
    }
  } else {
    console.log('✅ No potential HTTP errors found!\n');
  }
  
  console.log('\n✨ HTTP error check complete!');
  process.exit(0);
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
