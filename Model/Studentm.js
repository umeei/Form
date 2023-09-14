const mongoose = require ('mongoose');
const studentmodel = mongoose.model("student", new mongoose.Schema({
    "Fullname":String,
    "Email":String,
    "PhoneNumber":Number,
    "Birthdate":String,
    "Address":String,
    "Gender":String,

}))

module.exports = studentmodel