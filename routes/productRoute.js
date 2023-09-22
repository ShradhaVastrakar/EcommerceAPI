const express = require('express');
const productRouter = express.Router();
const { authenticateToken } = require('../middleware/auth_middleware');
const { getProductByCategoryId, getProductDetailsById, addProduct, updateProduct, deleteProduct, getAllProducts } = require("../controllers/productController");


// Get all products
productRouter.get('/', getAllProducts);

// Get product details by product ID
productRouter.get('/product/details/:productId', authenticateToken, getProductDetailsById);

// Get products by category ID
productRouter.get('/category/details/:categoryId', authenticateToken, getProductByCategoryId);

// Add a new product
productRouter.post('/', authenticateToken, addProduct);

// Update product by product ID
productRouter.put('/:productId', authenticateToken, updateProduct);


module.exports = { productRouter };