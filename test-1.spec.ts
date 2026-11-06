import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.youversion.com/');
await page.getByRole('navigation').getByText('Get Involved').click();
await page.getByRole('navigation').getByText('Partner Together').click();
await page.getByRole('link', { name: 'Bible App Lite' }).first().click();
await page.locator('div').filter({ hasText: 'An Offline Bible App Built to' }).nth(1).click();

})