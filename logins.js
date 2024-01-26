const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    loginemail : {
        type:String,
        required:true,
        unique:true
    },

    loginpassword : {
        type:String,
        required:true,
        unique:true
    },

})

// creating collection
const Login = new mongoose.model("Login" , loginSchema);
module.exports = Login;