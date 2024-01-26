const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    restaurantfirstname : {
        type:String,
        required:true,
    },

    restaurantlastname : {
        type:String,
        required:true,
    },

    restaurantname : {
        type:String,
        required:true,
    },

    restaurantsubcategory : {
        type:String,
        required:true,
    },

    restaurantrating : {
        type:Number,
        required:true,
    },

    restaurantreview : {
        type:String,
        required:true,
    }

})

// creating collection
const Restaurant = new mongoose.model("Restaurant" , restaurantSchema);
module.exports = Restaurant;