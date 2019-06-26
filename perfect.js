var input = process.stdin
//input.setEncoding('utf-8');

// Prompt user


console.log("Enter The number ")

input.on('data', function (data) 
{
    if(data == 'exit')
    {
        process.exit()
    }

   
    
    var var1=parseInt(data)
   
    for(var i = 1; i <=var1 ; i++)
    {   
        var sum =0
       
        for(var j=0;j<=(i/2);j++)
        {
           
          var  rem=i%j
            if(rem == 0)
            {
               sum =  sum + j
            }            
        }
           if(sum==i)
          {
                 console.log(i)
           }
}       
    //console.log("Enter The number ")
});
