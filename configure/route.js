const express = require('express')
const route = express.Router()
const usercontroller = require('../app/controller/usercontroller')
const authentication = require('../app/middleware/authentication')


route.post('/users/register',usercontroller.create)
route.post('/users/login',usercontroller.login)
route.get('/users/account',authentication,usercontroller.account)
route.delete('/users/logout',authentication,usercontroller.logout)

module.exports=route