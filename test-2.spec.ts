import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  //await page.getByRole('textbox', { name: 'Task title' }).click();
  await page.getByRole('textbox', { name: 'Task title' }).fill('testing task');
  //await page.getByRole('textbox', { name: 'Task title' }).press('Tab');
  await page.getByRole('textbox', { name: 'Due date' }).fill('2026-07-28');
  await page.getByRole('button', { name: 'Add task' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});