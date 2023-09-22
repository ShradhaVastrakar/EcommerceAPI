const { Category } = require("../models/categoryModel");
const { Product } = require("../models/productModel");
const colors = require("colors");


// Get all products
const getAllProducts = async (req, res) => {
    try {
      // Fetch all products
      const data = await Product.find();
  
      // Respond with a 200 status if successful
      return res.status(200).json({
        status: 200,
        success: true,
        message: "All products retrieved successfully",
        data: data,
      });
    } catch (error) {
      // Log the error and respond with a 400 status for server errors
      console.error(colors.red("Error in getAllProducts: ", error.message));
      res.status(400).json({
        status: 400,
        success: false,
        error: "Bad Request",
        message: error.message,
      });
    }
  };

  // Get product details by ID
const getProductDetailsById = async (req, res) => {
    try {
      const { productId } = req.params;
      
      // Find the product by ID
      const singleProductDetails = await Product.findOne({ _id: productId });
  
      if (!singleProductDetails) {
        // Respond with a 404 status if the product is not found
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Product not found or Invalid Product ID",
        });
      }
  
      // Respond with a 200 status if successful
      return res.status(200).json({
        status: 200,
        success: true,
        message: "Product details retrieved successfully",
        data: singleProductDetails,
      });
    } catch (error) {
      // Log the error and respond with a 400 status for server errors
      console.error(colors.red("Error in getProductDetails: ", error.message));
      res.status(400).json({
        status: 400,
        success: false,
        error: "Bad Request",
        message: error.message,
      });
    }
  };

  // Get products by category ID
const getProductByCategoryId = async (req, res) => {
    try {
      const { categoryId } = req.params;
    //  console.log(categoryId)
      // Find products by category ID and populate category details
      const categorizedProducts = await Product
        .find({ categoryId })
        .populate("categoryId");
  
      if (!categorizedProducts.length) {
        // Respond with a 404 status if no products are found
        return res.status(404).json({
          status: 404,
          success: false,
          message: "No products found for this category",
        });
      }
  
      // Respond with a 200 status if successful
      return res.status(200).json({
        status: 200,
        success: true,
        message: "Products retrieved successfully by Category ID",
        data: categorizedProducts,
      });
    } catch (error) {
      // Log the error and respond with a 400 status for server errors
      console.error(
        colors.red("Error in getProductsByCategory: ", error.message)
      );
      res.status(400).json({
        status: 400,
        success: false,
        error: "Bad Request",
        message: error.message,
      });
    }
  };


 // Add a new product
const addProduct = async (req, res) => {
    try {
      const { title, imageUrl, price, description, availability, categoryId } = req.body;
      
      // Check if the specified category exists
      const category = await Category.findById(categoryId);

      if (!category) {
        // Respond with a 404 status if the category is not found
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Category not found",
        });
      }
  
      // Create a new product and save it
      const product = new Product({
        title,
        imageUrl,
        price,
        description,
        availability,
        categoryId: category,
      });
      await product.save();
  
      // Respond with a 201 status if the product is successfully added
      return res.status(201).json({
        status: 201,
        success: true,
        message: "Product added successfully",
        data: product,
      });
    } catch (error) {
      // Log the error and respond with a 400 status for server errors
      console.error(colors.red("Error in addProduct: ", error.message));
      res.status(400).json({
        status: 400,
        success: false,
        error: "Bad Request",
        message: error.message,
      });
    }
  };

  // Update an existing product
const updateProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      const { title, imageUrl,  price, description, availability } = req.body;
  
      // Check if the product with the provided productId exists
      const product = await Product.findByIdAndUpdate(
        productId,
        {
          $set: {
            title: title,
            price: price,
            imageUrl: imageUrl,
            description: description,
            availability: availability,
          },
        },
        { new: true }
      );
  
      if (!product) {
        // Respond with a 404 status if the product is not found
        return res.status(404).json({
          status: 404,
          success: false,
          message: "Product not found",
        });
      }
  
      // Respond with a 200 status if the product is successfully updated
      return res.status(200).json({
        status: 200,
        success: true,
        message: "Product updated successfully",
        data: product,
      });
    } catch (error) {
      // Log the error and respond with a 400 status for server errors
      console.error(colors.red("Error in updateProduct: ", error.message));
      res.status(400).json({
        status: 400,
        success: false,
        error: "Bad Request",
        message: error.message,
      });
    }
  };
  


module.exports = { getProductByCategoryId, getProductDetailsById, addProduct, updateProduct, getAllProducts };