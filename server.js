const express = require("express")
const ConnectDb = require("./config/connectDb")
const route = require("./routes/contact")
const app = express()
require('dotenv').config()

ConnectDb()

app.use( express.json())
app.use ('/api/contacts' , route )
app.listen(process.env.port,()=>console.log(`server is running ${process.env.port}`))






// app.get('/', (req,res)=>{
//     res.send('hello')
// } )