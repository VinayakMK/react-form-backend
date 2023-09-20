const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        minlength:[4,"Fullname should have minimum 4 characters"]
    },
    email:String,
    password:String
});

module.exports = mongoose.model('User', userSchema);