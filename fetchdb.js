const express=require('express');
const user=require('./dbconn');
const router=express.Router();
//display data from database
router.get('/display',function(req,res){
user.find({},function(e,u){
//res.send(u);
res.render('index',{users:u});
});
});



//to delet an atem  from the database wlduno using an id hrefed in index view
router.get('/delet/:id',function(req,res){
    var name1=req.params.id;
user.findByIdAndDelete(req.params.id,function(req,res){

});
res.render("about",{name:name1});
});

// to add users in to the databse  first call form.ejs view to insert value
router.get('/add',function(req,res){
res.render('form.ejs');
});

router.post('/insert',function(req,res){
   const newuser=new user({
    country:req.body.country,//in this we have to use const body=require('body-parser');
    name:req.body.name,
    age:req.body.age
   });
   newuser.save().then(function(u){
    console.log('inserted');
}).catch(function(e){console.log("error occured!")})
res.redirect('/display')
});


module.exports=router;