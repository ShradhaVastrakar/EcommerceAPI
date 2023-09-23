const { Category } = require('../models/categoryModel');
const colors = require('colors');

// Get all categories
exports.allCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    return res.status(200).json({
      status: 200,
      success: true,
      message: "All categories retrieved successfully",
      data: categories,
    });
  } catch (error) {
    console.error(colors.red("Error in allCategories: ", error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: "Bad Request",
      message: error.message,
    });
  }
};

// Get category by Id
exports.getCategoryByCategoryId = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Category retrieved successfully",
      data: category,
    });
  } catch (error) {
    console.error(colors.red("Error in getCategoryByCategoryId: ", error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: "Bad Request",
      message: error.message,
    });
  }
};

// Create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = new Category({ name, description });
    await category.save();

    return res.status(201).json({
      status: 201,
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.error(colors.red("Error in createCategory: ", error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: "Bad Request",
      message: error.message,
    });
  }
};

// Update category by Id
exports.updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const { name, description } = req.body;

    const category = await Category.findByIdAndUpdate(
      categoryId,
      { name, description},
      { new: true }
    );

    if (!category) {
      return res.status(404).json({
        status: 404,
        success: false,
        message: "Category not found",
      });
    }

    return res.status(200).json({
      status: 200,
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    console.error(colors.red("Error in updateCategory: ", error.message));
    res.status(400).json({
      status: 400,
      success: false,
      error: "Bad Request",
      message: error.message,
    });
  }
};


