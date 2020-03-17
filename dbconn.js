const mongoose=require('mongoose');
const co=new mongoose.Schema({
    country:String,
    name:String,
    age:Number
});
const table=mongoose.model("student",co);
module.exports=table;
 