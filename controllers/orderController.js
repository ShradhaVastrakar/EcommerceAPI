// Nodemailer Location


// Models Location
const { User } = require('../models/userModel');
const { Order } = require('../models/orderModels');
const { Cart } = require('../models/cartModel');

const colors = require('colors');

// Place an order

  exports.placeOrder = async (req, res) => {
    try {
      const { userId } = req.params; // Get the user ID from the authenticated token
 
      // Find the user's cart
      const userCart = await Cart.findOne({ user: userId }).populate('items.product');
  
      if (!userCart || userCart.items.length === 0) {
        return res.status(400).json({
          status: 400,
          success: false,
          message: 'Cannot place an empty order. Add items to your cart first.',
        });
      }
  
      // Calculate the order total
      const orderTotal = userCart.items.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
  
      // Create a new order with the status 'Pending'
      const order = new Order({
        user: userId,
        items: userCart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
        })),
        total: orderTotal,
        status: 'Pending',  // Set the initial status as 'Pending'
      });
  
      // Save the order to the database
      await order.save();
  
      // Clear the user's cart
      userCart.items = [];
      await userCart.save();
  
      // Update the status to 'Delivered'
      order.status = 'Delivered';
      await order.save();
  
      return res.status(201).json({
        status: 201,
        success: true,
        message: 'Order placed successfully',
        data: order,
      });
    } catch (error) {
      console.error('Error in placeOrder: ', error.message);
      res.status(400).json({
        status: 400,
        success: false,
        error: 'Bad Request',
        message: error.message,
      });
    }
  };

  
// Get order history for an authenticated user
exports.getOrderHistory = async (req, res) => {
  try {
    const {userId} = req.params; // Get the user ID from the authenticated token

    // Find all orders for the user
    const orders = await Order.find({ user: userId }).populate('items.product');

    return res.status(200).json({
      status: 200,
      success: true,
      message: 'Order history retrieved successfully',
      data: orders,
    });
  } catch (error) {
    console.error(colors.red('Error in getOrderHistory: ', error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: 'Bad Request',
      message: error.message,
    });
  }
};

// Get order details by order ID
exports.getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // Find the order by its ID
    const order = await Order.findById(orderId).populate('items.product');

    if (!order) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: 'Order not found',
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: 'Order details retrieved successfully',
      data: order,
    });
  } catch (error) {
    console.error(colors.red('Error in getOrderDetails: ', error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: 'Bad Request',
      message: error.message,
    });
  }
};

// Update the order status by order ID
exports.updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;

    // Find the order by its ID
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: 'Order not found',
      });
    }

    // Update the order status
    order.status = status;
    await order.save();

    return res.status(200).json({
      status: 200,
      success: true,
      message: 'Order status updated successfully',
      data: order,
    });
  } catch (error) {
    console.error(colors.red('Error in updateOrderStatus: ', error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: 'Bad Request',
      message: error.message,
    });
  }
};