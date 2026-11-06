import { test, expect locator} from '@playwright/test';
test('test', async ({ page }) => {
await page.goto('https://www.w3schools.com/howto/howto_custom_select.asp');
await page.locator('#mySelect').selectOption({ label: 'Saab' });
await expect(page.locator('#mySelect')).toHaveValue('saab');
)}