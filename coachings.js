const mongoose = require("mongoose");

const coachingSchema = new mongoose.Schema({
    coachingfirstname : {
        type:String,
        required:true,
    },

    coachinglastname : {
        type:String,
        required:true,
    },

    coachingname : {
        type:String,
        required:true,
    },

    coachingsubcategory : {
        type:String,
        required:true,
    },

    coachingrating : {
        type:Number,
        required:true,
    },

    coachingreview : {
        type:String,
        required:true,
    }

})

// creating collection
const Coaching = new mongoose.model("Coaching" , coachingSchema);
module.exports = Coaching;