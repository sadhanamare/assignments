var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the string:",function(s)
{
    var array2 = Array.from(s)
    console.log(array2)
 res= array2.reduce((prev,curr)=> {
        if(!prev[curr])
        {
            prev[curr]=1
        }
        else
        {
            prev[curr] =prev[curr]+1
        }return prev
    } ,{});

console.log(res)

});