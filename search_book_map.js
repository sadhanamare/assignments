var map = new Map();
const path ="./files/"
const rr=require('./readline-sync')
const fs = require('fs');
console.log("Enter the choice")
console.log("1. Search Book")
console.log("2. Create a New Book")

var ch=rr.question("Enter the choice : ")

switch(ch)
{
case '1':Search_book()                            //Search book
    break

case '2':CreateNew();                                                  //create book
    break

case '3':
    default:

}

function CreateNew()
{
    var temp = rr.question("Enter the book name :")

    if(fs.existsSync(path+temp+'.txt') == true)
    {
        console.log("File Already Exist...\n ")
    }

    else{
    fs.writeFileSync(path+temp+".txt","")
    console.log("File Created !!")

    }
}

function Search_book()
{
    var key = []
    key = fs.readdirSync(path);
    for(var i = 0; i<key.length;i++)
    {
        map.set(key[i],1)
    }
    var search = rr.question("Enter the book name :")

    if(map.has(search+".txt"))
    {
        console.log(" File is present!")
    }
    else{
        console.log("Does not exist")
    }
console.log(map)
}
