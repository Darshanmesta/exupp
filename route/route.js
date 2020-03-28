const express=require('express')
const appRoute=express.Router()
const controller=require('../controller/controller')

appRoute.route('/').get(controller.home)
appRoute.route('/').post(controller.upload)

module.exports=appRoute;

