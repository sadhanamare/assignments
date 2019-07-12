(function () {
   var array = [1,2,3,4,5,6,7,8,9]
   var startIndex = 0;
  var endIndex = array.length - 1;
  var element = 8
  while(startIndex <= endIndex) 
  {
    var middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(element === array[middleIndex]) {
      return console.log("Element  found at index " +middleIndex+" element = "+ array[middleIndex]);
    }
    if(element > array[middleIndex])
    {
        startIndex = middleIndex + 1              // rightside
    }
    if(element < array[middleIndex])
    {
        startIndex = middleIndex - 1               // leftside
    }
  
}
 console.log("not found")
  }());