const mongoose=require('mongoose');
const textSchema=new mongoose.Schema({
    code:String,
    text:String,
    file:String
},{
    timestamps:true
})
model=mongoose.model('text',textSchema);
module.exports=model;