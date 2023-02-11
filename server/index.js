const cors = require('cors');
const express = require('express');
const app=express()
const helmet = require('helmet');
const hpp = require('hpp');
const mongoose = require('mongoose');
const xss=require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit=require('express-rate-limit');
require('dotenv').config();
const {readdirSync} =require('fs');

// Database Lib Import
app.use(mongoSanitize());
app.use(xss());
app.use(cors())
app.use(hpp());
app.use(helmet())
app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);


app.get('/', function(req, res){
    res.json({
        message: "Hello World!"
    })
})

// using router
readdirSync("./routers").map(r => app.use("/api/v1", require(`./routers/${r}`)));

const port = process.env.PORT ||4000

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('Connected to database')
    app.listen(port,()=>{
        console.log(`Server listening on ${port}`)
    })
})