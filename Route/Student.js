const studentrouter = require('express').Router()
const Studentm=require('../Model/Studentm')

studentrouter.get('/records',async function(req,res){
    var form=await Studentm.find();
    res.json('form');
})
studentrouter.get('/',async function(req,res){
    await Studentm.create(req.query);
    res.send('Student enrolled successfully');
})

module.exports=studentrouter;