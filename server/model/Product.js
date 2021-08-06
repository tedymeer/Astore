const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create product Schema
const productSchema = new mongoose.Schema(
  {
    Id: String,
    Name: String,
    Price: String,
    Quantity: String,
    Description: String,
    Category: String,
    Size: String,
    Images: [ String ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('product', productSchema);  