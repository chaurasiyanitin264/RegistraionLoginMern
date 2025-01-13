const express=require("express");
const route=express.Router();
const UserController=require("../controller/userController");

route.post("/registration",UserController.UserRegistration);
route.post("/userLogin",UserController.UserLogin);

module.exports=route;