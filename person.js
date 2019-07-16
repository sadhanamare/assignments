var p =() =>({
        status: 'OK'| 'NOTOK',
        error: [],
       output:{'operation': "", input:[], result:null}

});

     add=function (first_number, second_number) {
       
        clearerror()
        clearInput()
      
        validate()
        var res = first_number + second_number
        p.output.push(res)
         p.input.push(first_number,second_number)
         return p
      }

    square = function (number) {
    return number * number
         
    }

    square_root = function (number) {
       return number **(0.5)
    }

    cube = function (number) {

    return number * number* number
   
    }

    power = function (number, pow) 
   {
    if(number==0)
    {
        return package.error
    }
    if(pow==0)
    {
        return 1
    }

    return number **pow
}

module.exports = {
    add,
    square,
    square_root,
    cube,
    power
}

var validate = function(first_number,second_number)
{
if((Number.isInteger(first_number)) && (Number.isInteger(second_number)))
    { 
            return p.status("ok")
    }
    else
    {
         p.status.push("NOTOK")
         p.error.push("input must be an number")
    }
}

function clearInput() {
    while (p.input.length) {
      p.input.pop();
    }
  }
  
  function clearerror() {
    while (p.error.length) {
      p.error.pop();
    }
  }
  