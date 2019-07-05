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

        while (current.next) { 
            current = current.next; 
        } 
        current.next = node; 
    } 
    this.size++; 
    ll.save();
} 

insertAt(element, index) 
{ 
    console.log(index)
    console.log(element)
    if (index > 0 && index < this.size) 
        return false; 
    else { 
       
        var node = new Node(element); 
        var curr, prev; 
  console.log("ovalllllll")
        curr = this.head; 

        if (index == 0) { 
            node.next = head; 
            this.head = node; 
        } else { 
            curr = this.head; 
            var it = 0; 
  
            while (it < index) { 
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
    if (index > 0 && index > this.size) 
        return -1; 
    else { 
        var curr, prev, it = 0; 
        curr = this.head; 
        prev = curr; 
  
        if (index == 0) { 
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
        str += curr.element + " "; 
        curr = curr.next; 
    } 
    console.log(str); 
} 

save(name)
{
    var curr = this.head;
    while(curr)
    {
        toFile(name,curr.element)
        curr = curr.next;
        
    }          
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

function deletebook(book)
{
    if(fs.existsSync(path+book+'.txt') == true)
    {
        fs.unlinkSync(path+book+".txt")
        console.log("File Deleted")
        return 0 
    }
    console.log("File Does not exist")
    return 0
}

function toFile(bk,data)
{
    fs.writeFileSync(path+bk+".txt","\n"+data,{encoding:'utf-8',flag:'as+'})
}

function fromFile(bk)
{
  
   // fs.readFile(path+bk+".txt")
   fs.readFile(path+bk+".txt", 'utf-8',(err, element) => { 
    if (err) throw err; 
    console.log(element.toString()); 
}) 
   // var tmp=temp.toString() 
}

/*function tofile1(name,data)
{
fs.writeFile(name+'.txt', data, (err) => { 
    if (err) throw err; 
}) 

}*/
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
   // var choice 
    
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
case 4:// fileToLL()      
        insertFile()                               //4.Insert in between File")
        break
case 5:                             //.Delete line from book")
        break
case 6:  b_list()                                        //list
        break
 case 7:                                        //delete
        break
case 8:                                         //exit
        break
default:                             //default
}
});
}


//var prompts= r1.createInterface(process.stdin,process.stdout)

var i =""   
  

var ll = new LinkedList(this.bk);

 // var bk =" "
      
function line1()
{
    prompts.question("enter the book name:",function(bk)
{
    
//createbook();
var curr = this.head;

    if(fs.existsSync(path+bk+'.txt') == true)
    {
      //  console.log("File Already Exist")
     while(1){
    var i=rr.question("enter the lines\n:")
        
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
        //return bk
       // choices()
    }
    else
    {
        console.log("Invalid...\n ")
    }
});
}

function insertFile()
{
     prompts.question("enter the book name:",function(bk)
    {
         var curr = this.head;
    
        if(fs.existsSync(path+bk+'.txt') == true)
        {
        
                var abc = new LinkedList(bk)
                var arr = fs.readFileSync(path+bk+".txt");
                var np = arr.toString();
    console.log("  nidhiiiii  ")
                   
                for( let i=0;i<np.length;i++)
                {
                   
                     abc.add(np[i])
                    //ss=s.toString()
                }
                abc.printList()
                var i=rr.question("enter the lines:")
                var j=rr.question("enter the index\n:")
               // ll.add(i)
                ll.insertAt(i,j)
                ll.add(i)
                ll.save()
        }
             else
            {  
                console.log(" Invalid File name !! ")
               // line1()
            }   
    });
        
    }
    /*readbook()
    
    
   
   */



/*function fileToLL()
{
    prompts.question("enter the book name:",function(bk)
{
    
//createbook();
var curr = this.head;

    if(fs.existsSync(path+bk+'.txt') == true)
    {
      //  console.log("File Already Exist")
    while(1){
            var abc = new LinkedList(bk)
            var arr = fs.readFileSync(path+name+".txt");

            for( let i=0;i<arr.length;i++)
            {
                abc.add(arr[i])
            }
            }
    }
        
        else
        {  
            console.log(" Invalid File name !! ")
            line1()
        }    
});
    abc.printList()
}*/