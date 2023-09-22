const express = require('express');

const orderController = require('../controllers/orderController');

// Create an instance of an Express Router
const orderRouter = express.Router();

// Route to place an order.
orderRouter.post('/place-order', orderController.placeOrder);

// Route to retrieve the order history for an authenticated user.
orderRouter.get('/order-history', orderController.getOrderHistory);

// Route to retrieve the details of a specific order by its order ID.
orderRouter.get('/order-details/:orderId', orderController.getOrderDetails);

// Route to update the status of a specific order by its order ID.
orderRouter.put('/update-order-status/:orderId', orderController.updateOrderStatus);

// Export the router for use in the application
module.exports = {orderRouter};
