const express=require('express')
const { update, retrive, fupload } = require('../Controller/controller')
const fileUpload=require('../Middleware/File')
const Routes=express.Router()
Routes.route('/update').post(update)
Routes.route('/getdata').get(retrive)
Routes.route('/uploadfile').post(fileUpload.single('file'), fupload);
module.exports=Routes