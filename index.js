
//creating server connection 
const express=require('express');
const app=express()
const PORT=process.env.PORT || 500;
app.listen(PORT,function(){
console.log("server running on 500");
});

//connecting to database  mongo
const mongo=require('mongoose');
mongo.connect('mongodb://localhost:27017/wlduno',{}).then(()=>console.log("db created"))
.catch(e=>console.log('error happend'))

//creating collection name= student comming from dbconn.js module name =table 
//database name is wlduno as the above  and then insertin value to the collection
const collection =require('./dbconn');
const tsegay=new collection({country:'ethiopia',name:'lemma',age:70});
tsegay.save((e,u)=>{
    e?console.log("eroooooor"):console.log(u);

});

const body=require('body-parser');//this must decleared before route because 
//to recive form req.body.name
app.use(body.urlencoded({extended:false}))//to display form

//featching data from database name =wlduno  and collection name =student
const route=require('./fetchdb');
app.use(route);


//how to go to view folder and file name is about.ejs
const ejs=require('ejs');
app.set('views','views');//go to views
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render('about',{name:'tsegay'});
    
});

//telling for the server mongo that the folder javascripts is static
// and to run by browser only example  alert() does not work on server 
const path=require('path');
app.use(express.static(path.join(__dirname,'javascripts')));