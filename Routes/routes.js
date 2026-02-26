const express=require('express')
const { update, retrive, fupload, fretrive } = require('../Controller/controller')
const fileUpload=require('../Middleware/File')
const Routes=express.Router()
Routes.route('/update').post(update)
Routes.route('/getdata').get(retrive)
Routes.route('/uploadfile').post(fileUpload.single('file'), fupload);
Routes.route('/download/:filename').get(fretrive);
module.exports=Routes