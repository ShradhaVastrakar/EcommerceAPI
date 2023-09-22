const { User } = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require("../helper/successAndError");
const saltRounds = Number(process.env.saltRounds) || 10;
const jwtSecret = process.env.JWT_SECRET || 'masai';


// Getting all Users
async function getAllUsers(req, res) {
    try {
        // Retrieve all users from the database
        const users = await User.find();
        // Respond with the list of users
        res.status(200).json(successResponse(201, "Retrieved all Users successfully", users));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, "Error Fetching User"));
    }
}

//Registering all Users
async function registerUser(req, res) {
    try {
        // Extract user information from the request body
        const { email, password, name, role } = req.body;

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            // Email is already registered
            return res.status(400).json({ error: "Email already registered, Use different email or Login" });
        }

        // Hash the password using bcrypt
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            if (err) {
                // Handle password hashing error
                return res.status(500).json({ error: "Password hashing failed" });
            }

            // Create a new user document with hashed password
            const newUser = new User({ name, email, password: hash,role });

            // Save the new user to the database
            await newUser.save();

            // Respond with a success message
            res.status(201).json({ success: `${name} has been registered successfully with _Id-${newUser._id}` });
        });
    } catch (error) {
        // Handle bad request
        res.status(400).json({ error: "Bad request" });
    }
}
// Login User
const loginUser = async (req, res) => {
    try {
        // Extract user information from the request body
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // If user doesn't exist or password is incorrect
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "1day" });

        // Respond with a success message and the JWT token
        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        // Handle server error
        res.status(500).json({ error: "Internal server error" });
    }
}




// Export the functions
module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
};

