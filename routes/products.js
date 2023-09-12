var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Product = require("../models/Product");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const post = await Product.create(req.body);
    res.json(post);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(updatedProduct);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});
module.exports = router;
