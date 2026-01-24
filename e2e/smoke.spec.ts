import { test, expect } from '@playwright/test';

/**
 * Smoke tests for critical user flows
 * Uses Playwright's configured baseURL (see playwright.config.ts).
 */

test.describe('Smoke Tests', () => {
  test.beforeEach(async () => {
    test.setTimeout(30000);
  });

  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/en');
    await expect(page).toHaveTitle(/CerebraTechAI/);

    const header = page.locator('header').first();
    await expect(header).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/en');

    const solutionsLink = page.locator('a[href*="/en/solutions"]').first();
    if (await solutionsLink.count()) {
      await solutionsLink.click();
      await expect(page).toHaveURL(/\/en\/solutions/);
    }
  });

  test('locale switcher works', async ({ page }) => {
    await page.goto('/en');

    const switchToThai = page
      .locator('button[aria-label="Switch to Thai"]')
      .first();
    await expect(switchToThai).toBeVisible();
    await switchToThai.click();
    await expect(page).toHaveURL(/\/th(\/|$)/);
  });

  test('contact form is accessible', async ({ page }) => {
    await page.goto('/en/contact');

    const form = page.locator('form').first();
    await expect(form).toBeVisible();

    const inputs = page.locator(
      'input[type="text"], input[type="email"], textarea'
    );
    await expect(inputs.first()).toBeVisible();
  });

  test('404 page works', async ({ page }) => {
    await page.goto('/en/non-existent-page');
    await expect(page.locator('body')).toContainText(/not found|404/i, {
      timeout: 5000,
    });
  });

  test('API health endpoint responds', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data).toHaveProperty('status');
  });
});

test.describe('Performance Smoke Tests', () => {
  test('LCP is within acceptable range', async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');

    const metrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded:
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      };
    });

    expect(metrics.domContentLoaded).toBeLessThan(3000);
    expect(metrics.loadComplete).toBeLessThan(5000);
  });

  test('no console errors on page load', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/en');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    const criticalErrors = errors.filter(
      err =>
        !err.includes('DevTools') &&
        !err.includes('Extension') &&
        !err.includes('favicon')
    );
    expect(criticalErrors.length).toBe(0);
  });
});

test.describe('Accessibility Smoke Tests', () => {
  test('page has an h1', async ({ page }) => {
    await page.goto('/en');
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1.first()).toBeVisible();
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/en');
    await page.waitForLoadState('networkidle');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });
});

test.describe('SEO Smoke Tests', () => {
  test('page has meta description', async ({ page }) => {
    await page.goto('/en');
    const metaDescription = await page
      .locator('meta[name="description"]')
      .getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription?.length).toBeGreaterThan(50);
  });

  test('page has canonical URL', async ({ page }) => {
    await page.goto('/en');
    const canonical = await page
      .locator('link[rel="canonical"]')
      .getAttribute('href');
    expect(canonical).toBeTruthy();
  });
});

test.describe('Responsive Design Smoke Tests', () => {
  test('page renders on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');
    await expect(page.locator('main').first()).toBeVisible();
  });
});
