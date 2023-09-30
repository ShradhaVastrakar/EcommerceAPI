const express = require('express');

const categoryController = require('../controllers/categoryController');
const { authenticateToken } = require('../middleware/auth_middleware');
const { authorization } = require("../middleware/authorization")

// Create an instance of an Express Router
const categoryRouter = express.Router();

// Get all categories
categoryRouter.get('/',  categoryController.allCategories);

// Get category by Id
categoryRouter.get('/:categoryId', authenticateToken, categoryController.getCategoryByCategoryId);

// Create a new category
categoryRouter.post('/', authenticateToken, authorization, categoryController.createCategory);

// Update category by Id
categoryRouter.put('/:categoryId', authenticateToken, authorization, categoryController.updateCategory);


module.exports = {categoryRouter};
