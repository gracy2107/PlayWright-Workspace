import { test, expect } from '@playwright/test';

test('country dropdown is visible and India can be selected', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  const countryDropdown = page.locator('#country');
  const colorsDropdown = page.locator('#colors');

  await countryDropdown.scrollIntoViewIfNeeded();
  await expect(countryDropdown).toBeVisible();
  await expect(countryDropdown).toContainText('India');

  await countryDropdown.selectOption({ value: 'india' });
  await expect(countryDropdown).toHaveValue('india');

  await colorsDropdown.scrollIntoViewIfNeeded();
  await expect(colorsDropdown).toBeVisible();

  const optionValues = await colorsDropdown.locator('option').evaluateAll((options) =>
    options.map((option) => option.getAttribute('value'))
  );

  const duplicates = optionValues.filter((value, index) => optionValues.indexOf(value) !== index);

  if (duplicates.length > 0) {
    console.log('Duplicate color dropdown values found:');
    duplicates.forEach((value) => console.log(`- ${value}`));
  } else {
    console.log('No duplicate color dropdown values found.');
  }
});
