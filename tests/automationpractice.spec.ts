 import { test, expect } from '@playwright/test';

 test ("verify page title", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.locator('name'=Username).fill(grace");
  await page.locator('name'=Password).fill("grace123");

  await expect (page).toHaveTitle






 })
 