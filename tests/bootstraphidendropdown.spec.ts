import{test,expect,locator} from '@playwright/test';
test("booststrapdropdown",async({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com");
//longin step
await page.locator('input[name="username"]').fill('Admin');
await page. locator('input[name="password"]').fill('admin123');
await page .locator('button[type="submit"]').click;
//click on the PIM
await page. getByText('PIM').click;
//click on job titile dropdown
await page.locator('form i').nth(2).click;
await page.waitForTimeout(3000);
// captures all options from the dropdown and count
const options:locator = page.locator("div[role=['listbox']span");
const count:number=await options.count();
console.log("number of in a option:", count);
//print all the options
for(let i=0;i<count;i++){

console.log (await options. nth(1)).innerText());
console.log (await options. nth(1)).testContent());
});

// select options
for(let i=0;i<count;i++){
  const test= await options .nth(1).innerText();
if(text==='Automation Tester') {

   await options.nth(1).click();
 }
}
await page. waitForTimeout(5000);


})