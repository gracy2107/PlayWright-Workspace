import { test, expect, Locator  } from '@playwright/test';

test('test demo', async ({ page }) => {
  await page.goto('https://example.com');
  const heading: Locator = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
})

test('has title', async ({ page }) => {
  await page.goto('https://qtp4free.blogspot.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Quick Test Professional Tutorials/);
});



await test.step('test step demo', async () => {
  await page.goto('https://example.com');
  const heading: Locator = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');
}