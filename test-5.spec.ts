import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.incubator.lokachakra.in/');
  await expect(page.locator('#radix-_R_ia9lb_')).toContainText('Services');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('kanikira2@gmail.com');
  await page.getByRole('textbox', { name: 'Email' }).press('Tab');
  await page.getByRole('link', { name: 'Forgot password?' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('12345678');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
});