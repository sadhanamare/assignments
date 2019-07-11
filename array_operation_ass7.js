var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)

prompts.question("enter the string:",function(s)
{
    var array2 = Array.from(s)
    
    var result = []
    for (index = 0; index < array2.length; index++)
    {
      
       if(array2[index]>="a" && array2[index] <="z")
       {
        var r =array2[index].toUpperCase()
        result.push(r)
       }
       else
       {
          
        var r=array2[index].toLowerCase()
        result.push(r)
       }
        
    }  
     var res = result.join('') 
        console.log("Coversion = "+res)
        
      
});
