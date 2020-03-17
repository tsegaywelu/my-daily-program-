//creating server
const express=require('express');
const app=express()
const PORT=process.env.PORT || 50;
app.listen(PORT,function(){console.log("server is running on 50......")})

 //connecting to mongo 
const mongo=require('mongoose');
mongo.connect('mongodb://localhost:27017/myprogram',{}).then(()=>console.log("connected"))
.catch(e=>console.log('nonoonononon'))

const body=require('body-parser');
app.use(body.urlencoded({extended:false}));
//including the insert.js file
const route=require('./insert');
app.use(route);

//loading the home.ejs
const ejs =require('ejs');
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('home');
});