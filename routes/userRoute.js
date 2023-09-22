const express = require("express");
const { getAllUsers, registerUser, loginUser }  = require("../controllers/userController");

// Create an instance of an Express Router
const userRouter = express.Router();


// get all users
userRouter.get("/getAllUser", getAllUsers)

// Create a new user
userRouter.post('/register', registerUser);

// Log in user
userRouter.post('/login', loginUser);

module.exports = { userRouter };