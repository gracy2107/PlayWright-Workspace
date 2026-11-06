import { expect, test } from '@playwright/test';

test('submit an RFP service request successfully', async ({ page }) => {
  await page.goto('https://dev.incubator.lokachakra.in/');
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('menuitem', { name: 'RFP Bids' }).click();

  await expect(page).toHaveURL(/\/rfp-bids$/);

  const formHeading = page.getByRole('heading', { name: 'Service Request Form' });
  await formHeading.scrollIntoViewIfNeeded();

  const testId = Date.now();
  await page.getByRole('textbox', { name: 'Name of the Person *' }).fill(`Avery Example ${testId}`);
  await page.getByRole('textbox', { name: 'Company Name *' }).fill('Playwright Test Labs');
  await page.getByRole('textbox', { name: 'Registration Number' }).fill(`PW-${testId}`);
  await page.getByRole('textbox', { name: 'Email *' }).fill(`playwright.rfp.${testId}@example.com`);
  await page.getByRole('textbox', { name: 'Contact Number *' }).fill('+1 8644016123');
  await page.getByRole('textbox', { name: 'Notes' }).fill('Automated end-to-end test request.');

  await page.getByRole('heading', { name: 'RFP-Triage', exact: true }).click();
  await page.getByRole('button', { name: /Select Date & Time \(45-minute session\)/ }).click();
  await page.getByRole('grid').locator('button:not([disabled])').first().click();

  const timeSlot = page.getByRole('combobox').last();
  await timeSlot.click();
  await page.keyboard.press('Enter');

  await page.getByRole('button', { name: 'Submit Request' }).click();
  await expect(page.getByText('RFP SERVICE REQUEST REVIEW & PREVIEW')).toBeVisible();
  await page.getByRole('button', { name: 'CONFIRM & SUBMIT REQUEST' }).click();
  
  await expect(
  page.locator('[data-sonner-toast]').filter({ hasText: /success|submitted/i }),
 ).toBeVisible();
});
