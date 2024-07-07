const Product = require("../models/Product.js");

const getProducts = async () => {
  return Product.find();
};

const addProduct = async (newProduct) => {
  return await Product.create(newProduct);
};

const updateProduct = async (id, product) => {
  return await Product.findByIdAndUpdate(id, product, {
    returnDocument: "after",
  });
};

const deleteProduct = (id) => {
  return Product.deleteOne({ _id: id });
};

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
