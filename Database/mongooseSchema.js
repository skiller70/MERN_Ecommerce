const mongoose = require("mongoose");

// PRODUCT SCHEMA

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: String,
  imageUrl: String,
  stock: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// PRODUCT SCHEMA


const Product = mongoose.model("Product", productSchema);


module.exports = { Product };
