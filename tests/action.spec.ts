//textbox/ testinput/input/radio button
import{test,expect,locator} from "@playwright/test";
test('action', async ({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const textBox:locator = page.locator('#name');
await expect(textBox).toBeVisible();  
await expect(textBox).toBeEnabled();
const maxlenth: string|null= await textBox.getAttribute("maxlength"); //retrun the maximum lenth of atrribute
expect(maxlenth).toBe('15'); // expect using value not need await expect using element need await
textBox.fill("kaya");
//console.log("inputvalue of the first name:",await textBox.inputValue());//returen input value of texbox
const entervalue: string = await textBox.inputValue();
console.log("Input Value of the FirstName :", entervalue); // returns th einput value of text box
await page.waitForTimeout(60000);
expect(entervalue).toBe("kaya");

await page.waitForTimeout(3000);
}
);

// radio button 
test.only('radio button',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const maleRadio:locator=page.locator('#male');
await expect(maleRadio).toBeVisible();// male radiobutton
await expect(maleRadio).toBeEnabled();
expect(await maleRadio.isChecked()).toBe(false);

}
);

