const express = require("express");
const ProductModel = require("./models/Product.model");

const router = express.Router();

router.get("/store", async (req, res) => {
  res.send("Welcome to my Store");
});

router.get("/store/products", async (req, res) => {
  const product = await ProductModel.find();
  res.json(product);
});

router.post("/store/products", async (req, res) => {
  const product = new ProductModel(req.body);
  await product.save();
  res.send(product);
  res.status(201);
});

router.patch("/store/products/:id", async (req, res) => {
  try {
    const task = await TaskModel.findOneAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    res.sendStatus(200);
  } catch {
    res.status(404);
    res.send({ error: "Task doesn't exist!" });
  }
});

router.delete("/store/products/:id", async (req, res) => {
  try {
    await ProductModel.deleteOne({ _id: req.params.id });
    res.sendStatus(204);
  } catch {
    res.sendStatus(404);
    res.send({ error: "Product does not exist" });
  }
});

module.exports = router;
