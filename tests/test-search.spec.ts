import { test, expect, Page } from '@playwright/test';

test('Search Playwright on Google', async ({ page }: { page: Page }) => {
  // Open Google
  await page.goto('https://www.google.com');

  // Type "playwright" in the search box
  await page.locator('textarea[name="q"]').fill('playwright');

  // Press Enter to search
  await page.keyboard.press('Enter');

  // Wait for results to load
  await page.waitForLoadState('networkidle');

  // Verify results page loaded
  await expect(page).toHaveTitle(/playwright/i);

});