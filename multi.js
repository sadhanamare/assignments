var array1=[[1,1],[2,2],[3,3]];
var array2=[[1,1,1],[2,2,2]];
   
len_row=array1.length;
len_col=array [0].length;
len_row1=array2.length;
len_col1=array2[0].length;
//console.log(len_row);
//console.log(len_col);

//console.log(len_row1);
//console.log(len_col1);


var result = [];
 for(var i=0;i<len_row;i++)
 {
     result.push([0]);
     for(j=0;j<len_row;j++)
     {
        result[i][j] = 0;
     }
 }


 

 console.log("Resultant matrix is =");
 if(len_row1==len_col){
    // console.log("kjlkjl")
for(var i=0;i<len_row;i++)
{
for(var j=0;j<len_row;j++)
{
    for(var k=0;k<len_col;k++)
    {
        //console.log("i "+i+"j "+j+" k"+k)
       
         result[i][j] += array1[i][k]*array2[k][j];
         
    }
}}}

for(var i=0;i<len_row;i++)
 {
     console.log("\t")
     for(j=0;j<len_row;j++)
     {
        console.log(result[i][j]);
        
     }
 }