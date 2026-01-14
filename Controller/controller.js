const { text } = require("express")
const mongodp=require("../Models/model")


exports.update= async(req,res,next)=>{
       // update the values with actucal values in future
      mongodp.create({
        code:"9999",
       text:"This is updated text",
       location:"This is updated location"
       })
     res.send({
        data,
        msg:"data succesfully updated"
     })
}