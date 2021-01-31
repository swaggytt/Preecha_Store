const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: String,
    category: String,
    wholesalePricePerBox: Number,
    wholesalePricePerPack: Number,
    wholesalePricePerOne: Number,
    RetailPrice: Number
  },
  { timestamps: true }
);
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
