const express = require("express");
const app = express();
const port= process.env.PORT || 5000;
const mongoose = require('mongoose');
app.use(express.json());


const studentapi= require('./Route/Student');
app.use("/student/api",studentapi)

mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message)
})



app.listen(port, ()=>{
    console.log("Server is running");
})