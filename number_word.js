
var num = process.stdin
console.log("Enter The number ")

num.on('data', function (data)
{
    if(data =='exit')
    {
        process.exit()
    }
     var num1 = parseInt(data)
    var leng = num1.length
    var temp1 

    var unit = ["zero","one","Two","Three","four","Five","six","seven","eight","nine"]
    var arr = ["","Eleven","tweleve","Thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    var two_digit = ["ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"]
    var three_digit =["Hundred","thousand"]

    if(num1>=0 && num1<=9)
    {
        console.log("input enetred is = " +unit[num1])
    }
    else if(num1>=11 && num1<=19)
    {
          console.log("input enetred is = " +arr[num1-10])
    }
    
    else if(num1>=20 && num1<=99)
    {
        var temp=0
        temp = num1 / 10
        t=parseInt(temp)
     
        temp1 = num1 % 10
       console.log("input enetred is = "  +two_digit[t-1] + "  "+unit[temp1])
  }
    else if(num1>=100 && num1<=999)
    {
        myfunction3(num1)
    }
    else if(num1>= 1000 && num1<= 9999)
    {
         temp = num1 / 1000
         t=parseInt(temp)
         num1 = num1 % 1000
        console.log(" " +unit[t] +" "+three_digit[1]+" and ")
         
         var i =myfunction3(num1)
      }

 function myfunction3(demo)
 {
    var temp=0
    temp = (num1 / 100)
     t=parseInt(temp)
    var rem = (num1 % 100)
     num1 = rem / 10
    t1=parseInt(num1)
   
   temp1 = rem % 10
   t2=parseInt(temp1)
    
console.log("  "+unit[t]+ " "+three_digit[0]+ " "+ two_digit[t1-1]+" "+unit[t2]  )
 }
});