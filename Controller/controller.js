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