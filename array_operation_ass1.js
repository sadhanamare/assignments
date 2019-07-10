var array = [0, 15, false, -22, '',undefined, 47, null]
    var result=  array.filter(function(element)
        {
           
                return(element != 0 && element !=false && element != '' && element  != undefined && element != null)
                
         });
 console.log(result)