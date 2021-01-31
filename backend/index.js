const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const ProductModel = require("./models/Product.model");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/store", { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected at mongodb://localhost:27017/store");
  });

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/products",async (req, res) => {
  const product = await ProductModel.find();
  res.json(product);
});

app.listen(9000, () => {
  console.log("Start server at port 9000");
});
