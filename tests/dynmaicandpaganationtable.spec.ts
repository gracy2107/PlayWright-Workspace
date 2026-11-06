import{test,expect,locator} from "@playwright/test"

test('dynmmic tables',async({page})=>{
await.page goto("https://practice.expandtesting.com");

const table:locator=page.locator("table.table tdody");
await expect(table).toBevisible();
// select all the row , then fin number of rows
const rows:locator[]=await table.locator("tr").all();
console.log("Number of rows in atable:",rows.length);

})
//step1: for chrom process get value of CPU load.
// Read each row o check chrome presence