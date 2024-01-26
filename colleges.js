const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    collegefirstname : {
        type:String,
        required:true,
    },

    collegelastname : {
        type:String,
        required:true,
    },

    collegename : {
        type:String,
        required:true,
    },

    collegesubcategory : {
        type:String,
        required:true,
    },

    collegerating : {
        type:Number,
        required:true,
    },

    collegereview : {
        type:String,
        required:true,
    }

})

// creating collection
const College = new mongoose.model("College" , collegeSchema);
module.exports = College;