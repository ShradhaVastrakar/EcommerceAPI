const mongoose = require('mongoose');


// Define the User Schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['Customer', 'Seller', 'Admin'],
        default: 'Customer'
    }
});

// Create a user model using schema
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = { User };
