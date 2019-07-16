var math = require('./person.js');
var express = require('express')
var app = express()

app.get('/add/:number1/:number2', function(req, res)  {
    var number1 = parseInt(req.params.number1)
    var number2 = parseInt(req.params.number2)
    
      
        var add = math.add(number1,number2)
        res.send(add);
    
});

app.get('/square/:number1', function(req, res)  {
    var number1 = req.params.number1
    var square = math.square(number1)
    res.status(200).send(square.toString());
});

app.get('/square_root/:number1', function(req, res)  {
    var number1 = req.params.number1
    var square_root = math.square_root(number1)
    res.status(200).send(square_root.toString())
});
app.get('/cube/:number1', function(req, res)  {
    var number1=req.params.number1
    var cube = math.cube(number1)
    res.status(200).send(cube.toString());
});
app.get('/power/:number1/:number2', function(req, res)  {
    var number1 = req.params.number1
    var number2 = req.params.number2
    var power1 = math.power(number1,number2)
    res.status(200).send(power1.toString());
});
var server1 = app.listen(3000, function(){
    console.log(" running ")
})


