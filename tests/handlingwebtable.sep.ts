  import{test,expect,locator} from '@playwright/test';

  test("handling table",async({page})=>{
    await page.goto("https://demoweshop.tricentis.com/");
    const products:locator= page.locator('product-tittle');
    //innertext vs textcontent()
  console.log(await products.nth(1).innerText());
  console.log(await products.nth(1).textContent());









})
