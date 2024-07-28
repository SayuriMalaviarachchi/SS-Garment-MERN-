const User = require ("../Model/UserModel")

//To display data
const getAllUsers = async (req , res , next) => {

    let Users;

    //To return data in DB
    try {
        users = await User.find()
    } catch (err) {
        console.log(err) 
    }

    //If there are no users
    if(!users){
        return res.status(404).json({message:"User not found"})
    }

    //Display all users
    return res.status(200).json({ users })

}


//To insert data
const addUsers = async (req , res , next) => {

    const { name,gmail,phone,address} = req.body;

    //Create a variable
    let user;

    try {
        user = new User({name,gmail,phone,address})
        // To save to DB
        await user.save()
    } catch (err) {
        console.log(err)
    }
    //Not insert users
    if(!user){
        return res.status(404).send({message:"Unable to add user"})
    }
    return res.status(200).json({ user })
}

//Get by ID
const getById = async(req,res,next) => {

    const id = req.params.id // this name should in routes path (id)

    let user

    try {
        user = await User.findById(id)
        
    } catch (err) {
        console.log(err)
        
    }
    if(!user){
        return res.status(404).send({message:"User not found"})
    }
    return res.status(200).json({ user })
}

//Update data
const updateUser = async (req, res ,next) => {

    const id = req.params.id 

    const { name,gmail,phone,address} = req.body;

    let users

    try {
        users = await User.findByIdAndUpdate(id,
            { name : name, gmail : gmail, phone : phone ,address : address})//
        users = await users.save()
    } catch (err) {
        console.log(err)
    }

    if(!users){
        return res.status(404).send({message:"Unable to update"})
    }
    return res.status(200).json({ users })

}

//Delete user
const deleteUser = async (req, res , next) => {

    const id = req.params.id

    let user

    try {
        user = await User.findByIdAndDelete(id)
    } catch (err) {
        console.log(err)
    }
    
    if(!user){
        return res.status(404).send({message:"Unable to delete"})
    }
    return res.status(200).json({ user })
}


exports.getAllUsers = getAllUsers
exports.addUsers = addUsers
exports.getById = getById
exports.updateUser = updateUser
exports.deleteUser = deleteUser