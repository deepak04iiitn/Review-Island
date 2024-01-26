const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
    touristfirstname : {
        type:String,
        required:true,
    },

    touristlastname : {
        type:String,
        required:true,
    },

    touristname : {
        type:String,
        required:true,
    },

    touristsubcategory : {
        type:String,
        required:true,
    },

    touristrating : {
        type:Number,
        required:true,
    },

    touristreview : {
        type:String,
        required:true,
    }

})

// creating collection
const Tourist = new mongoose.model("Tourist" , touristSchema);
module.exports = Tourist;