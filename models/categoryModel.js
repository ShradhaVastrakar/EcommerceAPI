const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

const Category = new mongoose.model("Category" ,categorySchema)

module.exports = {
    Category
}