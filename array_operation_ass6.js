function insertDash()
{
    var temp = document.getElementById("text1").value.toString()
  // document.getElementById("text1").innerHTML = "input is"+input
        var input = Array.from(temp)
    var result =[]
    result.push(input[0])
    for(var i = 0; i <= input.length; i++)
    {
            if((input[i]) % 2 == 0 && input[i+1]%2 == 0)
            {
                result.push("-")
                result.push(input[i])
            }
            else{
                result.push(input[i])
            }
    }
   var r = result.join("") 
   alert(r)
   // document.getElementById("Demo").innerHTML = "result "+r
}
//insertDash()