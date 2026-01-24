# QA Scripts

This directory contains various quality assurance scripts for the CerebraTechAI frontend project.

## Scripts

### check-i18n-leaks.js

Checks for internationalization (i18n) issues in the codebase:

- Detects untranslated text or i18n key leaks
- Checks for mixed Thai/English content
- Validates translation keys exist in both language files
- Identifies missing translation keys

**Usage:**

```bash
yarn i18n:check
```

**Exit Codes:**

- `0`: All checks passed
- `1`: Issues found

### check-broken-links.js

Validates internal and external links in the codebase:

- Extracts all links from source files
- Validates internal routes exist
- Checks external links (optional in CI)
- Skips common external services and localhost

**Usage:**

```bash
yarn links:check
```

**Environment Variables:**

- `CI=true`: Skip external link checks for faster CI execution

**Exit Codes:**

- `0`: All links valid
- `1`: Broken links found

### check-http-errors.js

Analyzes code for potential HTTP error patterns:

- Detects missing error handling in fetch/axios calls
- Checks API routes for proper error handling
- Identifies hardcoded URLs
- Validates ErrorBoundary usage

**Usage:**

```bash
yarn http:check
```

**Exit Codes:**

- `0`: No issues found
- `1`: Potential errors detected

## Running All QA Checks

To run all QA checks locally:

```bash
yarn qa:all
```

This includes:

- TypeScript type checking
- ESLint
- i18n leaks check
- Broken links check
- HTTP errors check

For CI-optimized checks (faster, skips external links):

```bash
yarn qa:ci
```

## CI Integration

These scripts are automatically run in CI via the [QA Gates workflow](../.github/workflows/qa-gates.yml).

## Adding New Checks

When adding new QA scripts:

1. Create the script in this directory
2. Make it executable: `chmod +x scripts/your-script.js`
3. Add a npm script in `package.json`
4. Update the CI workflow if needed
5. Document the script in this README
