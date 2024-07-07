const express = require("express");
const { addProduct, getProducts } = require("../controllers/product");

const router = express.Router({ mergeParams: true });

module.exports = router;
