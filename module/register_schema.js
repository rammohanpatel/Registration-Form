const mongoose = require("mongoose");

const register = new mongoose.Schema({
    username : {
        type:String,
        required:true,
    },
    email:{
         type:String,
         unique:true,
         required:true,       
    },
    password : {
        type: String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

const Register = new mongoose.model("Register",register);
module.exports = Register