const express = require("express")
const router = express.Router()

//Insert model
const User = require("../Model/UserModel")

//Insert user controller
const UserController = require("../Controllers/UserControllers")

router.get("/",UserController.getAllUsers);
router.post("/",UserController.addUsers);
router.get("/:id",UserController.getById);
router.put("/:id",UserController.updateUser);
router.delete("/:id",UserController.deleteUser);

//Export
module.exports = router