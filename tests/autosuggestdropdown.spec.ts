  import{test,expect,locator} from '@playwright/test';
  test("Autosuggest dropdown",async({page})=>{
  await page.goto("https://www.flipkart.com/");
  await page.locator("input[nam='q']").fill("smart"); // search text

  //get all the suggested options --> control+shift=p on DOM --> emulate focused page

   const options:locator=page.locator("ul>li");
   const count= await options.count();
   console.log("number of suggested options", count);//8
    // printng all the suggested options in the console

     // console.log ("5 thoption:",await options.nth(5).innertext()); // to get one option,
     // to get all options write for loop
     for(let i=0;i<count;i++)
      console.log(await options.nth(i).innertext());
     console.log(await options.nth(i).textContent());
      
      {





    }



  await page.waitForTimeout(5000);



})