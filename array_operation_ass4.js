
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the start :",function(first){
    prompts.question("enter the end:",function(last){
        var start=parseInt(first)
        var end=parseInt(last)
       rangeBetween(start,end)

});
});
function rangeBetween(start, end)
{
    for(let i =start; i<=end ; i++)
    {
        console.log(i)
    }
}
