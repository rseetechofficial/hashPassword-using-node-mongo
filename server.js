// Importing modules 
var express = require('express'); 
var mongoose = require('mongoose'); 
var bodyparser = require('body-parser'); 

// Intialize express app 
var app = express(); 

// Mongodb connection 
mongoose.connect("mongodb://localhost/hashAppDb",{ useNewUrlParser: true, useUnifiedTopology: true }, function(err){
    if(err){
        console.log("The error is", err);
    } else {
        console.log("The database is connected");
    }
})

// Using bodyparser to parse json data 
app.use(bodyparser.json()); 

// Importing routes 
const user = require('./route/user'); 

// Use user route when url matches /api/user/ 
app.use('/api/user', user); 

// Creating server 
const port = 3000; 
app.listen(port, () => { 
	console.log("Server running at port: " + port); 
}); 
