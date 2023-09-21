const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true }
})

const Category = new mongoose.model("category" ,categorySchema)

module.exports = {
    Category
}