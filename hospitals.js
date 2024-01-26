const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
    hospitalfirstname : {
        type:String,
        required:true,
    },

    hospitallastname : {
        type:String,
        required:true,
    },

    hospitalname : {
        type:String,
        required:true,
    },

    hospitalsubcategory : {
        type:String,
        required:true,
    },

    hospitalrating : {
        type:Number,
        required:true,
    },

    hospitalreview : {
        type:String,
        required:true,
    }

})

// creating collection
const Hospital = new mongoose.model("Hospital" , hospitalSchema);
module.exports = Hospital;