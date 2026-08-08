import { test, expect } from '@playwright/test';

test('prompt alert enters grace', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  page.once('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toContain('Please enter your name');
    await dialog.accept('grace');
  });

  await page.locator('#promptBtn').click();

  await expect(page.locator('body')).toContainText('Hello grace! How are you today?');
});
