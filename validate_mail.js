console.log("gshsjd")

function function1()
{

   var mail1 = document.getElementById("text1").value;
 
   var splitt = mail1.split(/[.]/);
   var split2 = Array.from(splitt[0])
   var i =0
   var a=splitt[0].indexOf("@")
   if (splitt[1].length>=2 || a>1)
   {

   while(i<split2.length)
    { 
       if(split2[0]>='a'&& split2[0]<='z'|| split2[0]>='A'&& split2[0]<='Z' || split2[0]>='0'&& split2[0]<='9')
       i++;

    }

   alert("valid mail")
   
   }
  
    else
     {
        alert("Invalid mail")
        
    }
}