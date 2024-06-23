const express = require("express");
const { getProducts, addProduct } = require("../controllers/product");

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await getProducts();
  res.send({ data: products });
});

module.exports = router;
