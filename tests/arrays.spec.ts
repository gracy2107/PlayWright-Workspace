import{test,expect,locator} from "@playwright/test";
test('array',async({page})=>{
let numbers: number[]= [1,2,3,4,5,6,78,9,0];
let fruties: string[]= ["apple","banana","orange"];

console.log("size of numbers array":,numbers.length);
console. log("size of fruties array":,fruties.length);

})