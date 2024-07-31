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