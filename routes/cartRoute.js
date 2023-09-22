// Routes for Cart Management
const express = require('express');
const cartRouter = express.Router();
const cartController = require('../controllers/cartController');

// Add to Cart
cartRouter.post('/add-to-cart', cartController.addToCart);

// View Cart
cartRouter.get('/view-cart/:userId', cartController.viewCart);

// Update Cart
cartRouter.put('/update-cart/:userId', cartController.updateCart);

// Remove from Cart
cartRouter.delete('/remove-from-cart/:productId', cartController.removeFromCart);

module.exports = { cartRouter };