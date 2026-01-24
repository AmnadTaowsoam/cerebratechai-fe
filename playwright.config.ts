import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT || 3100);
const baseURL = process.env.BASE_URL || `http://localhost:${port}`;
const defaultChannel = process.platform === 'win32' ? 'msedge' : undefined;
const channel = process.env.PLAYWRIGHT_CHANNEL || defaultChannel;
const videoSetting =
  process.env.PLAYWRIGHT_VIDEO ||
  (process.env.CI ? 'retain-on-failure' : 'off');

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
  ],
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: videoSetting as
      | 'off'
      | 'on'
      | 'retain-on-failure'
      | 'on-first-retry',
  },
  projects: [
    // Smoke tests - run on Chromium only for speed
    {
      name: 'smoke-chromium',
      testMatch: '**/smoke.spec.ts',
      use: { ...devices['Desktop Chrome'], channel },
    },
    // Full E2E tests
    {
      name: 'chromium',
      testIgnore: '**/smoke.spec.ts',
      use: { ...devices['Desktop Chrome'], channel },
    },
    {
      name: 'firefox',
      testIgnore: '**/smoke.spec.ts',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      testIgnore: '**/smoke.spec.ts',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      testIgnore: '**/smoke.spec.ts',
      use: { ...devices['Pixel 5'], channel },
    },
  ],
  webServer: {
    command: `yarn dev -p ${port}`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
  // Global timeout for all tests
  timeout: 60 * 1000,
  // Expect timeout for assertions
  expect: {
    timeout: 10 * 1000,
  },
});
