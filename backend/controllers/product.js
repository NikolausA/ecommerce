const Product = require("../models/Product.js");

const getProducts = async () => {
  return await Product.find();
};

const addProduct = async (newProduct) => {
  return await Product.create(newProduct);
};

module.exports = { getProducts, addProduct };
