// Routes for Cart Management
const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');
const { authenticateToken } = require("../middleware/auth_middleware")

// Add to Cart
cartRouter.post('/add-to-cart',authenticateToken, cartController.addToCart);

// View Cart
cartRouter.get('/view-cart/:userId',authenticateToken, cartController.viewCart);

// Update Cart
cartRouter.patch('/update-cart/:userId',authenticateToken, cartController.updateCart);

// Remove from Cart
cartRouter.delete('/remove-from-cart/:userId/:productId',authenticateToken, cartController.removeFromCart);

module.exports = { cartRouter };