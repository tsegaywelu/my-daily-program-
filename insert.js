const express=require('express');
const router=express.Router();
const helo=express()
//creating collection dayday and after that we can insert valu to it
const mon=require('mongoose');
const ensert=new mon.Schema({
tselaot:String,
sin:String,
happy:String,
programing:String,
wereb:String,
alet:String
});
const go=mon.model('dayday',ensert);

//inserting data to dayday collection through typing my hand
/*const data=new go({
    tselaot:'abtsihe eye',
sin:'mnm aygeberkun',
happy:'yes',
programing:'btami yserh aleku',
wereb:'nay ldet ylemamed aleku',
alet:'27/04/2012'
});

data.save((e,u)=>{
    e?console.log("eroooooor"):console.log(u);

});
*/
//telling for insert.js what req.body.name means
const body=require('body-parser');
helo.use(body.urlencoded({extended:false}));
router.post('/submit',function(req,res){
const data=new go({
    tselaot:req.body.tselot,
    sin:req.body.sin,
    happy:req.body.happy,
    programing:req.body.programming,
    wereb:req.body.wereb,
    alet:req.body.alet

});
data.save((e,u)=>{
    e?console.log("eroooooor"):console.log(u);

});
 res.redirect('/')
    
    });
module.exports=router;