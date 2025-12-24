const mongoose=require('mongoose');
const textSchema=new mongoose.Schema({
    code:String,
    text:String
})
model=mongoose.model('text',textSchema);
module.exports=model;