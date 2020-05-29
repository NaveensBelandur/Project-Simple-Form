const express = require('express')
const app = express()
const seetUpDb = require('./configure/database')
const route = require('./configure/route')
const cors = require('cors')
const port = 3001

seetUpDb()
app.use(cors())
app.use(express.json())
app.use('/',route)
app.listen(port,()=>{
    console.log('lisitng on the port',port)
})