const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userProfilesSchema = new Schema({
    name:{
        type:String,
        required:true, //Validation
    },

    password:{
        type:String,
        required:true, //Validation
    },

    gmail:{
        type:String,
        required:true, //Validation
    },

    phone:{
        type:Number,
        required:true, //Validation
    },

    address:{
        type:String,
        required:true, //Validation
    },
})

module.exports = mongoose.model(
    "UserProfilesModel", //File name
    userProfilesSchema //Function name
)


