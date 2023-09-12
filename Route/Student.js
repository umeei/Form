const studentrouter = require('express').Router()

studentrouter.get('/',async function(req,res){
    res.send("Connected")
})
module.exports=studentrouter;