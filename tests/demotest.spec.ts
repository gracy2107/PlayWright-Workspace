import { test, expect  } from '@playwright/test';

test('Demo Test', async ({ page}) => {
 await page .goto("https://www.pa.gov/agencies/employment");
 await page.getByRole('link', { name: 'Search for Jobs' }).click();


})