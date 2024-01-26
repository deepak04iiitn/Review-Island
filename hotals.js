const mongoose = require("mongoose");

const hotalSchema = new mongoose.Schema({
    hotalfirstname : {
        type:String,
        required:true,
    },

    hotallastname : {
        type:String,
        required:true,
    },

    hotalname : {
        type:String,
        required:true,
    },

    hotalsubcategory : {
        type:String,
        required:true,
    },

    hotalrating : {
        type:Number,
        required:true,
    },

    hotalreview : {
        type:String,
        required:true,
    }

})

// creating collection
const Hotal = new mongoose.model("Hotal" , hotalSchema);
module.exports = Hotal;