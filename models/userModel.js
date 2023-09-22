const mongoose = require('mongoose');


// Define the User Schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['ROLE_USER', 'ROLE_ADMIN'],
        default: 'ROLE_USER'
    }
});

// Create a user model using schema
const User = mongoose.model('user', userSchema);

// Export the User model
module.exports = { User };
