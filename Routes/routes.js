const express=require('express')
const { update, retrive } = require('../Controller/controller')
const Routes=express.Router()
Routes.route('/update').post(update)
Routes.route('/getdata').get(retrive)
module.exports=Routes