var arr = [2, 5, 9, 6];
function contains(arr,element)
    {
        for(i = 0; i < arr.length; i++)
        {
            if(arr[i] === element)
            {
                return true
            }
        }
}

console.log(contains(arr, 5));



