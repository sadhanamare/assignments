var numArray = [1, 2, 3, 4, 5];
var germanArray = ["eins", "zwei", "drei", "vier", "fünf"];
var result = []
var i = 0
function create(ele, i)
{
    return "The number "+ele+" is called "+germanArray[i]+"in german"

}i++;

result= numArray.map(create)
console.log(result)