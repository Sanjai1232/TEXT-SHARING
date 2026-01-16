const multer = require('multer');


const upload=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/')

    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname)
    }
})

const fileUpload=multer({storage:upload})

module.exports=fileUpload;