import{test,expect,locator} import{test,expect,locator} from '@playwright/test';"
test("handling web table",asyns({page})=>{
await page.locator("https://www.walmart.com/")
//await page.locator('input[name="username"]').fill('Admin');
//await page. locator('input[name="password"]').fill('admin123');
const products:locator=page. locator('')
//1. innerText() Vs texConetent()
console.log (await products.nth(1).innerText()); //actual text from element it will extract
console.log(await products.nth(1).textcontent());
//traditional for loop use if it is not arry
 const count=await products.count());

for(let i=0;i<count;i++){

console.log(await products.nth(1).innerText());


}
                            



}


})