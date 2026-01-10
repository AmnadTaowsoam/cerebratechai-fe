#!/usr/bin/env node

/**
 * Check for i18n key leaks in the codebase
 * This script scans for common patterns that indicate missing translations
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PATTERNS = [
  // Common i18n key patterns that should not appear in rendered output
  /\b[a-z]+\.[a-z_]+\b/g, // Simple dot notation (e.g., "resources.title")
  /\{\{[^}]+\}\}/g,        // Template literals (e.g., "{{key}}")
  /\$t\([^)]+\)/g,         // Vue-style i18n (e.g., "$t('key')")
];

const WHITELIST = [
  // Technical terms that are intentionally mixed
  'api.', 'app.', 'dev.', 'www.', 'http.', 'https.',
  // File extensions
  '.tsx', '.ts', '.jsx', '.js', '.json', '.md',
  // Common abbreviations
  'e.g.', 'i.e.', 'etc.',
];

let issues = [];

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, index) => {
    // Skip comments and imports
    if (line.trim().startsWith('//') ||
        line.trim().startsWith('import') ||
        line.includes('useTranslations(')) {
      return;
    }

    PATTERNS.forEach(pattern => {
      const matches = line.match(pattern);
      if (matches) {
        matches.forEach(match => {
          // Check if whitelisted
          const isWhitelisted = WHITELIST.some(wl => match.includes(wl));
          if (!isWhitelisted) {
            issues.push({
              file: filePath,
              line: index + 1,
              match: match,
              content: line.trim()
            });
          }
        });
      }
    });
  });
}

function scanDirectory(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(file)) {
        scanDirectory(filePath, extensions);
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        checkFile(filePath);
      }
    }
  });
}

// Check for mixed language in same file (TH/EN)
function checkMixedLanguage(dir) {
  try {
    // Look for Thai characters mixed with English in same line
    const result = execSync(
      `grep -r -n "[ก-๙].*[A-Za-z]\\|[A-Za-z].*[ก-๙]" ${dir} --include="*.tsx" --include="*.ts" --exclude-dir=node_modules --exclude-dir=.next || true`,
      { encoding: 'utf-8' }
    );

    if (result) {
      console.log('\n⚠️  Potential mixed language (TH/EN in same line):');
      console.log(result);
    }
  } catch (error) {
    // Grep returns non-zero if no matches found, which is fine
  }
}

// Main execution
console.log('🔍 Checking for i18n key leaks...\n');

const srcPath = path.join(process.cwd(), 'src');
scanDirectory(srcPath);

if (issues.length > 0) {
  console.log(`❌ Found ${issues.length} potential i18n key leaks:\n`);
  issues.forEach(issue => {
    console.log(`${issue.file}:${issue.line}`);
    console.log(`  Match: "${issue.match}"`);
    console.log(`  Line: ${issue.content.substring(0, 100)}...`);
    console.log('');
  });
  process.exit(1);
} else {
  console.log('✅ No i18n key leaks found!\n');
}

// Check for mixed language
console.log('🔍 Checking for mixed languages...\n');
checkMixedLanguage(srcPath);

console.log('\n✨ i18n check complete!');
process.exit(0);
