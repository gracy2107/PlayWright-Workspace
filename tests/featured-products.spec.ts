import { test, expect } from '@playwright/test';

test('count featured products on demo web shop homepage', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');

  const featuredProducts = page.locator('.product-grid.home-page-product-grid .product-item');
  const count = await featuredProducts.count();

  console.log(`Found ${count} featured products`);
  expect(count).toBeGreaterThan(0);
});
