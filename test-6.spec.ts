import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://dev.incubator.lokachakra.in/');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('menuitem', { name: 'RFP Bids' }).click();

  await expect(page).toHaveURL(/\/rfp-bids$/);
  await page.getByRole('textbox', { name: 'Name of the Person *' }).fill('Testing');
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('Testing company');
  await page.getByRole('textbox', { name: 'Registration Number' }).fill('TS2332323');
  await page.getByRole('textbox', { name: 'Email *' }).fill('tstin@test.com');
  await page.getByRole('textbox', { name: 'Contact Number *' }).fill('+18654632345');
  await page.getByRole('textbox', { name: 'Notes' }).fill('testing');
  await page.getByText('Free', { exact: true }).click();
  await page.getByRole('button', { name: 'Select Date & Time (45-minute' }).click();
  await page.getByRole('button', { name: 'Tuesday, October 6th,' }).click();
  await page.getByRole('combobox').filter({ hasText: 'Select time slot' }).click();
  await page.getByLabel('09:45').getByText('09:').click();
  await page.getByRole('button', { name: 'Submit Request' }).click();
  await page.getByRole('button', { name: 'Confirm & Submit Request' }).click();
  await expect(page.getByLabel('Notifications alt+T').getByRole('list')).toContainText('RFP-Bid request created successfully');
});