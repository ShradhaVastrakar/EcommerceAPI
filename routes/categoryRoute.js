const express = require('express');

const categoryController = require('../controllers/categoryController');
const { authenticateToken } = require('../middleware/auth_middleware');

// Create an instance of an Express Router
const categoryRouter = express.Router();

// Get all categories
categoryRouter.get('/', categoryController.allCategories);

// Get category by Id
categoryRouter.get('/:categoryId', authenticateToken, categoryController.getCategoryByCategoryId);

// Create a new category
categoryRouter.post('/', authenticateToken, categoryController.createCategory);

// Update category by Id
categoryRouter.put('/:categoryId', authenticateToken, categoryController.updateCategory);

// Delete category by Id
categoryRouter.delete('/:categoryId', authenticateToken, categoryController.deleteCategory);

module.exports = {categoryRouter};