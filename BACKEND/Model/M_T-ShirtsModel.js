const mongoose = require("mongoose")
const Schema = mongoose.Schema

const tshirtSchema = new Schema({
    nameT:{
        type:String,
        required:true, //Validation
    },
    
    color:{
        type:String,
        required:true, //Validation
    },

    price:{
        type:Number,
        required:true, //Validation
    },

    size:{
        type:String,
        required:true, //Validation
    },

    description:{
        type:String,
        required:false, //Validation
    },

})