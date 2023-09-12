const mongoose = require ('mongoose');
const studentmodel = mongoose.model("student", new mongoose.Schema({
    "name":String,
    "Course":String,
    "Gender":Number,
    "Age":Number
}))

module.exports = studentmodel