const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
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
    "UserModel", //File name
    userSchema //Function name
)


