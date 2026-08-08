import{test,expect,locator}from'@playwright/test';
import process = require('node:process');
test('duplicate option',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropDownOptions:Locator= page.locator('#colory>option');//havaing duplicate

  const dropDownOptions:Locator= page.locator('#animals>option');// not have duplicate
  const optionsText:string[]=(await dropDownOptions.allTextContents()).map(test=>text.trim());

const myset=new Set<string>()); //set duplicate not process allowedNodeEnvironmentFlags
Const duplicateOptions:string[]=[];// arry duplicates allowed
for(const text of optionsText){
  if(myset.has(text)){
    duplicateOptions.push(text);
  }else{
    myset.add(text);
   //console.log("Duplicate options",duplicateOptions);
   connsole.log("Duplicate options are:===>", duplicate));
   
   if(duplicate.length>0){
    console.log("Duplicate optionfound",duplicates));

   }
   else
    console.log("No duplicate option found");
   {




   }


  }
}



  