////npx ts-node tests/sample.ts

let fruits:string[]=['apple', 'banna' ,'orange','mango','kiwi'];
console.log("printing frutis along with index using for loop");
for(let i in fruits)
{
    console.log(i,fruits[i]);
}
console.log("printing frutis along with index using for loop");
fruits.forEach(function(element,index){
    console.log(`${index}`,`${element}`);
}



    


