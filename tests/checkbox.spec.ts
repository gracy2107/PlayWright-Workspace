import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.getByRole('radio', { name: 'Female' }).check();
  await page.getByRole('checkbox', { name: 'Sunday' }).check();
  await page.getByRole('checkbox', { name: 'Monday' }).check();
  await page.getByRole('checkbox', { name: 'Tuesday' }).check();
  await page.getByRole('checkbox', { name: 'Wednesday' }).check();
  await page.getByRole('checkbox', { name: 'Thursday' }).check();
  await page.getByLabel('Colors:').selectOption('red');
  await page.getByLabel('Sorted List:').selectOption('giraffe');
  await page.locator('#datepicker').click();
  await page.locator('#ui-datepicker-div').getByRole('link', { name: '4', exact: true }).click();
  await page.locator('#txtDate').click();
  await page.getByRole('link', { name: '11' }).click();
  await page.getByPlaceholder('Start Date').fill('2026-08-19');
  await page.getByPlaceholder('End Date').fill('2026-08-27');
  await page.locator('#post-body-1307673142697428135').getByRole('button', { name: 'Submit' }).click();
});