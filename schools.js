const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
    schoolfirstname : {
        type:String,
        required:true,
    },

    schoollastname : {
        type:String,
        required:true,
    },

    schoolname : {
        type:String,
        required:true,
    },

    schoolsubcategory : {
        type:String,
        required:true,
    },

    schoolrating : {
        type:Number,
        required:true,
    },

    schoolreview : {
        type:String,
        required:true,
    }

})

// creating collection
const School = new mongoose.model("School" , schoolSchema);
module.exports = School;