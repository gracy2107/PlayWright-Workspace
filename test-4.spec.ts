import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.incubator.lokachakra.in/');
  await page.getByRole('textbox', { name: 'Email ID*' }).click();
  await page.getByRole('textbox', { name: 'Email ID*' }).fill('kanikira2@gmail.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('12345678');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#radix-_r_d_')).toContainText('Manager');
  await expect(page.locator('#radix-_r_d_')).toContainText('Manager');
  await expect(page.locator('#radix-_r_d_')).toMatchAriaSnapshot(``);
  await expect(page.locator('#radix-_r_d_')).toMatchAriaSnapshot(``);
  await expect(page.locator('#radix-_r_d_')).toMatchAriaSnapshot(``);
});