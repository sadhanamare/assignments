const rr=require('./readline-sync')
const fs = require('fs');
const path = "D:\\Training\\workspace\\";
var r1 = require("readline")
var prompts= r1.createInterface(process.stdin,process.stdout)
choices();
class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 

class LinkedList { 
    constructor(book) 
    { 
        this.head = null; 
        this.size = 0; 
        this.name = book;
    }  

add(element) 
{ 
    var node = new Node(element); 
    var current; 

    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 

        while (current.next != null) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++; 
    
} 

insertAt(element, index) 
{ 
    console.log(index)
    console.log(element)
    if (index > 0 && index > this.size) 
        return false; 
    else { 
       
        var node = new Node(element); 
        var curr, prev; 
  
        curr = this.head; 

        if (index == 0) { 
            node.next = this.head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            while (it < index) { console.log("ovalllllll")
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
  
            node.next = curr; 
            prev.next = node; 
        } 
        this.size++; 
    } 
} 

removeFrom(index) 
{ 
    console.log("rtyuytyutyuyt")
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 1; 
        curr = this.head; 
        if (index == 1) { 
            this.head = curr.next; 
        } 
        else { 
            
            while (it < index) { 
                it++; 
                prev = curr; 
                curr = curr.next; 
            } 
   
            prev.next = curr.next; 
        } 
        this.size--; 
  
        return curr.element; 
    } 
} 

read(bk)
{
    var curr = this.head;
  fromFile(bk)
    while(curr)
    {
        curr = curr.next;
    }
}
printList() 
{ 
    var curr = this.head; 
    var str = ""; 
    while (curr) { 
        str =str + curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 

save(name)
{
    var curr = this.head;
    while(curr)
    {
        if(curr==this.head)
        {
            console.log("onvall")
        toFile(name,curr.element,0)
        }
        else{
            toFile(name,curr.element,1)
        }
        curr = curr.next;
        
    }          console.log("saved")
}

}
function createbook()
{

    prompts.question("enter the book name:",function(book){
        var temp=book.toString()
    if(fs.existsSync(path+temp+'.txt') == true)
    {
        console.log("File Already Exist...\n ")
        choices()
    }
    else{
    fs.writeFileSync(path+temp+".txt","")
    ll.name=temp
    console.log("File Created !! ")
    line1()
    }
});
}
/*
function deletebook()
{
    bk=rr.question("enter the book name:")
    
if(fs.existsSync(path+bk+'.txt') == true)
    {
        console.log(" File is Exists")
        fs.unlink(path+bk, function (err) {
        if (err) throw err
        console.log('File deleted!')
      });
    }
      else
      {
          console.log("Invalid File")
      }

}
*/


function del()
{
    var fname = rr.question("enter the file name (to be deleted):");
    fname=path+fname+".txt"
    deleteFile(fname)
}

function deleteFile(file)
{
    fs.unlink(file, function (err) {
        if (err) 
        {
            console.log("file does not exist")
            choices()
        }
        else
        {
            console.log('File deleted!');
            choices()
        }
      });
}

function toFile(bk,data,f)
{
    if(parseInt(f)==0)
    {
        console.log("***************")
    fs.writeFileSync(path+bk+".txt",data,{encoding:'utf-8',flag:'w'})
    }
    else
    {  
        fs.writeFileSync(path+bk+".txt","\n"+data,{encoding:'utf-8',flag:'as+'})
    }
}

function fromFile(bk)
{
    var tmp = fs.readFileSync(path+bk+".txt")
    for(let i in tmp){
        console.log(tmp[i]);
    }
    
}

function choices()
{
    console.clear();
    console.log("*************Book Management **************")
    console.log("1.create book name")
    console.log("2.Read into book")
    console.log("3.append end of file")
    console.log("4.Insert line in between")
    console.log("5.Delete line from book")
    console.log("6.List of books")
    console.log("7.Delete book")
    console.log("8.Exit")

    var r1 = require("readline")
    
prompts.question("Enter the choice: ", function(choice){

   var ch=parseInt(choice)
switch(ch)
{
    case 1:  createbook() ; 
            line1()          
        break;
case 2:  readbook()
        break
case 3: line1()                                  //. Append end of File")
        break
case 4: insertFile()                               //4.Insert in between File")
        break
case 5:  delete_b_line()                      //.Delete line from book")
        break
case 6:  b_list()                                        //list
        break
 case 7: del()                                   //delete
        break
case 8:                                         //exit
        break
default:                             //default
}
});
}

var i =""   
var ll = new LinkedList(this.bk);      
function line1()
{
    prompts.question("enter the book name:",function(bk)
{

var curr = this.head;

    if(fs.existsSync(path+bk+'.txt') == true)
    {
      //  console.log("File Already Exist")
     while(1){
    var i=rr.question("enter the lines\n:");
        
            if(i.toString() === '++')
            {
                // process.exit()    
                break; 
            }
             else
            {
             ll.add(i)
            }
        }
    ll.save(bk)
    }
    else{  
        console.log(" Invalid File name !! ")
        line1()
    }
});
}

function b_list()

{
    var count=0
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, './repository1/files/');
//passsing directoryPath and callback function
console.log("flag 1")
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        count++
        console.log(file); 
    });
});
}

function readbook()
{
    prompts.question("enter the book name:",function(bk)
    {
        if(fs.existsSync(path+bk+'.txt') == true)
    {
        console.log("File Already Exist...\n ")
        ll.read(bk)

    }
    else
    {
        console.log("Invalid...\n ")
    }
});
}

function insertFile()
{
    bk=rr.question("enter the book name:")
    
    
        if(fs.existsSync(path+bk+'.txt') == true)
        {
                ll.name = bk
                
                var arr = fs.readFileSync(path+bk+".txt",{encoding :'utf-8'}).split(/\n|\r/);
              
                   for( let i=0;i<arr.length;i++)
                {
                    
                     ll.add(arr[i].toString())
                   
                }
                console.log(ll); 
                console.log(""+arr)
                var l=rr.question("enter the lines:")
                var j=rr.question("enter the index\n:")
               ll.insertAt(l,parseInt(j))
            
                ll.save(bk)
                ll.printList()
        }
             else
            {  
                console.log(" Invalid File name !! ")
               
            }   
           
    }
    function delete_b_line()
    {
        bk=rr.question("enter the book name:")
    
    
        if(fs.existsSync(path+bk+'.txt') == true)
        {
                ll.name = bk
                
                var arr = fs.readFileSync(path+bk+".txt",{encoding :'utf-8'}).split(/\n|\r/);
              
                   for( let i=0;i<arr.length;i++)
                {
                    
                     ll.add(arr[i].toString())
                   
                }
                console.log(ll); 
                console.log(""+arr)

                line_n=rr.question("enter the line number to delete")
                line_num=parseInt(line_n)

                ll.removeFrom(line_num)
                ll.save(bk)
                ll.printList()
            }
                else
                {  
                    console.log(" Invalid File name !! ")
                   
                }   
   
}