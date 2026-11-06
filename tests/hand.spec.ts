const { test, expect } = require("@playwright/test");

test("end-to-end date input test", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const dateInput = page.locator("#datepicker");
  await expect(dateInput).toBeVisible();

  await dateInput.fill("07/17/2026");
  await expect(dateInput).toHaveValue("07/17/2026");
});
await 