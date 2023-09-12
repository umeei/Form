const express = require("express");
const app = express();
const port= process.env.PORT || 5000;
const mongoose = require('mongoose');
app.use(express.json());


const studentapi= require('./Route/Student');
app.use("/student/api",studentapi)

mongoose.connect("mongodb://127.0.0.1:27017").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message)
})



app.listen(port, ()=>{
    console.log("Server is running");
})