const mongoose = require("mongoose")
const Schema = mongoose.Schema

const pdfSchema = new Schema({
    pdf:{
        type:String,
        required:true, //Validation
    },

    title:{
        type:String,
        required:true, //Validation
    },

   })

module.exports = mongoose.model(
    "PdfDetails", //File name
    pdfSchema //Function name
)


