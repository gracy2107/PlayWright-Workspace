
 import{test, expect, locator} from "@playwright/test";
 test("dropdowns",async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page. locator("button[type='submit']").click();
  await page.locator('li').filter({ hasText: 'Admin' }).click();
  //await expect(page.locator(.oxd-icon.bi-caret-up-fill.oxd-select-text--arrow);
  await page.locator('.oxd-form-row', { hasText: 'Status' }).click();

 });