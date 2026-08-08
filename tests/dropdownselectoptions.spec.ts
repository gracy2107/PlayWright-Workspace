import{test,expect,locator} from "@playwright/test";
test("single select dropdown options",async({page})=>{  
 //select options from single select dropdown 4 way enything we can choose these are options.
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.locator('#country').selectOption('India'); //visibale text
  //await page.locator('#country').selectOption({value:'Uk'}); //by using value attribute
  //await page.locator('#country').selectOption({label:'India'});  //by using index attribute
  //await page.locator('#country').selectOption({index:3});  //by using index attribute
  //counting, checking dropdown options  (static dropdowns) expecte is assertion
  const dropdownoptions:locator= page.locator('#colors>options');
  await expect(dropdownoptions).toHaveCount(10); 
   
  //checking an option(text value) is present in dropdown or not and triming extra comma and space
  const optionsText: string[] = (await dropdownoptions.allTextContents()).map((text: string)=>text.trim());
  //checking option isinthe dropdown or not
  expect(optionsText).toContain('India');
  //pring option from the ddropdown with for loop
   for(const option of optionsText)
    {
      console.log (option);
  
    }
    //selecting option from dropdownin 4 ways
    await page.locator("#color").selectOption(['Red','Blue','Green']); //visibale text
    await page.locator('#color').selectOption(['red','blue','green']);


     await page.waitForTimeout(5000);

})