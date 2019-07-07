var map1 = new Map();
var key =""
var sentence =""
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)
prompts.question("Enter string ",function(sentence)
{
console.log(sentence)
var splitt = sentence.replace(/[.]/g,' ').split(/\s/);
console.log(splitt)


for(var i=0 ; i<splitt.length;i++)
{
    if(map1.has(splitt[i])==0)
    {
    map1.set(splitt[i],1)
    }

else
{
map1.set(splitt[i],parseInt(map1.get(splitt[i])+1))

}

}

var get_keys = Array.from(map1.keys())
var get_values = Array.from(map1.values())


for(var i=0; i<get_keys.length; i++)
{
console.log("count of "+get_keys[i]+" is "+get_values[i])

}


console.log(map1)
});

