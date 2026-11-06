import { test } from '@playwright/test';

test('sign in to Lokachakra', async ({ page }) => {
  


  await page.goto('https://lokachakra.in/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('Email').fill('kiran@gmail.com');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in with email' }).click();
});
