const mongodp = require("../Models/model");

exports.update = async (req, res, next) => {
    try {
         let uniq=false;
         while(!uniq){{
     const code=Math.floor(Math.random() * 10000).toString().padStart(4, '0'); 
            const existing = await mongodp.findOne({ code: code });

            if(!existing){
                await mongodp.create({
                    text: req.body.text,
                    code: code,
                });
                res.status(200).send({
                    msg: "Data Stored Successfully",
                    code: code
                });
                uniq=true;
                break;
            }
            
            uniq=false;      
         }
      }
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};



 exports.retrive=async (req,res,next)=>{


       const code = req.query.code;

    console.log("User searched for:", code);
           const ava=await mongodp.findOne({code:code})
       try{
       if(ava){
        return  res.json({
        msg:"avaliable",
        content:ava
       }) 
       }
        return res.json({
            msg:"no code found",
            code:ava
        })

       }catch(err){console.log("error in retrive")}
}

exports.fupload=async(req,res,next)=>{
    try{
     const path=req.file.path
    let uniq=false;
         while(!uniq){{
     const code=Math.floor(Math.random() * 10000).toString().padStart(4, '0'); 
            const existing = await mongodp.findOne({ code: code });
            if(!existing){
                await mongodp.create({
                    file: path,
                    code: code,
                });
                res.status(200).send({
                    msg: "Data/file Stored Successfully",
                    code: code
                });
                uniq=true;
                break;
            }
            uniq=false;      
         }
      }
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Server Error" });
    }
};

