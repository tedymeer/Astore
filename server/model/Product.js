const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create product Schema
const productSchema = new mongoose.Schema(
  {

  },
  { timestamps: true }
);

module.exports = mongoose.model('product', productSchema);  