import{test,expect,locator} from "@playwright/test"
test("JQuery datepicker",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");
const dateInput:locator= page.locator('#datepicker');
expect(dateInput).toBeVisible();
//Appraoch:1 using fill()method

dateInput.fill("07/17/2026"); //m/dd/y
await page.waitForTimeout(5000)

// select target date

//Appraoch:2 using date picker
 await dateInput.click() 
const years='2025'
const month='may'
const date='10'

while(ture){

const currentMonth=await page.locator('.ui-datepicker-month').textContent();
const currentYear=await page.locator('.ui-datepicker-month').textContent();
if(currentMonth===month && currentYear===year)
{
break;

}

//Future
await page.locator('.ui-datepicker-month').click

//past date in real aplication we cannot pik future and past dates
  await page.locator('.ui-datepicker-month').click

}


 const allDates=await page.locator(".ui-datepicker-celender td").all

for(let dt of allDate){
const dateText=await dt.innerText();
if(dateText === date)
    await dt.clck()
     break;


}





})
