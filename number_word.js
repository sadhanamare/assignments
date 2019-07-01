var num = process.stdin
console.log("Enter The number ")
num.on('data', function (data)
{
    if(data =='exit')
    {
        process.exit()
    }
    

    var unit_digit = [ "zero","one","Two","Three","four","Five","six","seven","eight","nine","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen",
    "Seventeen","Eighteen","Nineteen","Twenty","Thirty","Fourty","Fifty","Sixty","Seventy","Eighty","Ninety"]
var double_digit  = ["","Thousand ","Million","Billion","Million","Billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion"]
var out = ""
    
    var input = data.toString().slice(0,data.length-2)
    
  //  console.log(input)
    var arr = []
    if(input == 0)
    {
        console.log("Zero")
    }
    if(input.length>3)          
    {
        var len= input.length
        while(len > 0)
        {
            arr.push(input.slice(Math.max(len-3,0),len).toString())             
            len = Math.max(len-3,0) 
        }
        arr = arr.reverse()
     }
    else
    {
        arr.push(input)
    }
    console.log(arr)

     for(var i=0;i<arr.length;i++)
    {
        if(arr[i] != 0 )
        {   
            var out=out+three_digit(arr[i].toString())+" "+double_digit[arr.length-i-1]+ " "
        }
    }
    console.log(""+out.split('  ').join(' '))

    function unit(input,len) {        
        var x = parseInt(input[len]+input[len+1] );
        console.log(x)
        if((x>9 && x<20) || x % 10 ==0)
        {
            console.log(" dfghjgfds"+unit_digit[x])
            //return {sym: unit_digit[parseInt(x)],pos: 1}
          
            
        }
        else
        {
            x= 20+parseInt(input[len])
            return unit_digit[x-1]
        }}

    function three_digit(input)                 
{
   
    var out = ""
    
    for(var i =0;i<input.length;i++)
    { 
        var pos = input.length - i
       // console.log(pos)
        if(input[i] == 0)
        {
            continue
        }
      
        if(pos==2)  
        { 
                out = out +" "+ unit(input,i) 
              //  i=i+1 
        }
        else if(pos==3)
        {
            out = unit_digit[input[i]] + " hundred"+out 
        }
        else
        {
            out = out + " "+ unit_digit[input[i]] 
        }

    }
    return out      
}
 });   