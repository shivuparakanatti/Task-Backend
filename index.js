var express = require('express')
const app = express()
const port = 3040
const mongoose = require('mongoose')

const router = require('../Tasks/config/routes')

const configDb = require('./config/database')

//set up db
configDb()

app.use(express.json())
app.use(router)      //application levcel middleware function













app.listen(port,()=>{
    console.log('server is running on ',port)
})