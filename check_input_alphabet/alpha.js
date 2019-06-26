

function function1()
{
     var ch = document.getElementById("ch").value
   
   if(ch>='a' && ch<='z'|| ch>='A' && ch<='Z')
    
    {
        document.getElementById("Demo").innerHTML="input is character";

    }
    else{
        document.getElementById("Demo").innerHTML="input is not character";
    }
         
        
}

