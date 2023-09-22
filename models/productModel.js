const mongoose = require("mongoose");
const { Category } = require("./categoryModel")
 
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    },
    availablity: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    }
}
)

const Product = mongoose.model("product", productSchema)
module.exports = { Product }