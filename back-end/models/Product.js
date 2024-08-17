const mongoose = require('mongoose');

constProductSchema = new mongoose.Schema({
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
    enum: ['snack', 'beverage', 'portion'],
    required: true,
  },
  extras: [
    {
      name: String,
      price: Number,
    },
  ],
});

constProduct = mongoose.model('Product', ProductSchema);
module.exports = Product;