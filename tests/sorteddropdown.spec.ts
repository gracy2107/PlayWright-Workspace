import{test,expect,Locator} from '@playwright/test'; 
test('sorted dropdown',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const dropDownOptions:Locator= page.locator('#colour>option');
console.log(await dropDownOptions.allTextContents());



const optionsText:string[]=(await dropDownOptions.allTextContents()).map((text:string)=>text.trim());
const originalList:string[]=[...optionsText];
const sortedList:string[]=[...optionsText].sort();


  console.log("Originallist:string[][=...optionsText]);
  console.log("Sorted list",sortedList);

 









})