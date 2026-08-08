  import {test,expect,Locator} from "@playwright/test";
  test('Test,input Actions', async ({page})=>{
  await page. goto("https://testautomationpractice.blogspot.com/");
  const textBox: Locator = page.locator('#name');
  await expect(textBox).toBeVisible();
  await expect(textBox).toBeEnabled();
 const maxlength:string |null = await textBox.getAttribute("maxlength"); //it will not any value 
  expect(maxlength).toBe("15");
  await textBox.fill("grace");
 // console.log("text content of firstname:", await textBox.textContent()); // it will not retuen any value
  console.log("Input Value of firstname:", await textBox.inputValue()); //retures the input value of text box
  









});

