const express = require("express");
const app = express();
const port= 3000;
const mongoose = require('mongoose');
app.use(express.json());


app.set('view engine', 'ejs');
app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res) {
    res.render(__dirname+'/Views/Form.ejs')
})

const studentapi= require('./Route/Student');
app.use("/student/api",studentapi)

mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/Studentss?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message)
})



app.listen(port, ()=>{
    console.log("Server is running");
})