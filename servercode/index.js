//the entry point of the application 
//gives access to dependencies 
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

//initialise express : create instance of express
var app =express();

//importing routes
const route = require('./route/routes.js');

//connecting to mongodb name of db is shoppinglist
mongoose.connect('mongodb://localhost:27017/makeup', { useNewUrlParser: true } );

//callback function 
mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB'); 
}); 
mongoose.connection.on('error',(err)=>{
    console.log(err);
}); 
const PORT=3000; 

//ading a middleware 
app.use(cors());
//adding the second middleware to allow working with json
app.use(bodyparser.json());
app.use('/api', route);
 

//create a route to test the connexion 
app.get('/',(req,res)=>{
   res.send("welcome Page");
});

app.listen(PORT, ()=>{
    console.log("serveur started at port:" +PORT);
});
