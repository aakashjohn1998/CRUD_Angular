const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const {mongoose} = require('./db.js')
const employeeControllers = require('../NodeJS/controllers/employeeControllers')
const app= express()
app.use(bodyParser.json())
app.use(cors({ origin: 'http://localhost:4200' }));
var port = (process. env. PORT || '3000');
app.listen(port,()=> console.log(`server running on port:${port}`))

app.use('/employee',employeeControllers)
