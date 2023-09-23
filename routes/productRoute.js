const express = require('express');
const productRouter = express.Router();
const { authenticateToken } = require('../middleware/auth_middleware');
const { getProductByCategoryId, getProductDetailsById, addProduct, updateProduct, deleteProduct, getAllProducts } = require("../controllers/productController");
const {authorization } = require("../middleware/authorization")


// Get all products
productRouter.get('/', authorization, getAllProducts);

// Get product details by product ID
productRouter.get('/product/details/:productId', authenticateToken, getProductDetailsById);

// Get products by category ID
productRouter.get('/category/details/:categoryId', authenticateToken, getProductByCategoryId);

// Add a new product
productRouter.post('/', authenticateToken, authorization,  addProduct);

// Update product by product ID
productRouter.put('/:productId', authenticateToken, authorization,  updateProduct);


module.exports = { productRouter };