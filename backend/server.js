const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')
const { connectDB } = require('./config/connectDB')
const todoRouter = require('./routes/todo')

dotenv.config({path: path.join(__dirname,'config','config.env')})

const app = express()
connectDB();

app.use(express.json())
app.use(cors())

app.use('/api/todos',todoRouter)

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port : ${process.env.PORT}`)
})