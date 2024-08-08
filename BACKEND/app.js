// DB PW =Njt9LGP2LSKYla5J

//Setting up mongoose and express
const mongoose = require("mongoose")
const express = require("express")
const router = require("./Routes/UserRoutes")

const app = express();
const cors = require("cors")

//Connecting Middlewear
app.use(express.json())//We make repsonsiveness of the data that we send from postmon  
app.use(cors())
app.use("/users" , router);
app.use("/files",express.static("files"))



//Connecting mongoose
mongoose.connect("mongodb+srv://admin:Njt9LGP2LSKYla5J@cluster0.fobepbq.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(()=> {
    app.listen(5000)
})
.catch((err) => console.log((err)));

//Call UserSignUpModel for sign up
require("./Model/UserSignUpModel")
const User = mongoose.model("SignUp")//File name
app.post("/signUp" ,async(req,res) =>{ //"/SignUp" should be the same name in frontend Sign Up page URL
    const {name,password,gmail,phone,address} = req.body
    try{
        await User.create({
            name,password,gmail,phone,address,
        })
        res.send({status:"ok"})
    }catch(err){
        res.send({status:"err"})//err

    }
})

//Login 

app.post("/login" ,async(req,res) =>{ //"/SignUp" should be the same name in frontend Sign Up page URL
    const {gmail,password} = req.body
    try{
        const user = await User.findOne({gmail})
       if(!user){
        return res.json({err: "User not found"})
       }
       if(user.password === password){
        return res.json({status:"ok"})
       }else{
        return res.json({err:"Incorrect password"})
       }
    }catch(err){
        console.error(err)
        res.status(500).json ({err:"Server Error"})//err

    }})

//PDF-----------------------------------------------------------------------------------
    const multer = require("multer")
    const storage = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,'./file')
        },
        filename:function(req,file,cb){
            const uniqueSuffix = Date.now()
            cb(null,uniqueSuffix + file.originalname)
        },
    })

//insert model
require("./Model/pdfModel")
const pdfSchema = mongoose.model("PdfDetails")
const upload = multer({storage})

//upload file
app.post("/uploadfile" ,upload.single("file"),async(req,res) => {
    console.log(res.file)
    const title = req.body.title
    const pdf = req.file.filename
    try {
         await pdfSchema.create({title: title , pdf : pdf})
         console.log("PDF uploaded successfully")
         res.send({ status : 200})

    } catch (err) {
        console.log(err)
        res.status(500).send({ status : "error"})
        
    }
})

app.get("/getFile", async (req,res) => {
    try {
        const data = await pdfSchema.find({})
        res.send ({ status : 200 , data : data})
    } catch (err) {
        console.log(err)
        res.status(500).send({ status: "error"})
    }
}) 