const express = require("express");
const ProductModel = require("./models/Product.model");

const router = express.Router();

router.get("/store", async (req, res) => {
  res.send("Welcome to my Store");
});

router.get("/store/products",async (req, res) => {
    const product = await ProductModel.find();
    res.json(product);
  });

router.post("/store/products", async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.send(product);
  res.status(201);
});

module.exports = router;
