const express = require("express");
const app = express();
const port= 3000;
const mongoose = require('mongoose');
app.use(express.json());


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.render(__dirname+'/views/Form.ejs')
})

const studentapi= require('./Route/Student');
app.use("/student/api",studentapi)

mongoose.connect("mongodb://127.0.0.1:27017/StudentForm").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message)
})



app.listen(port, ()=>{
    console.log("Server is running");
})