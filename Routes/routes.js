const express=require('express')
const { update } = require('../Controller/controller')
const Routes=express.Router()
Routes.route('/update').post(update)
module.exports=Routes