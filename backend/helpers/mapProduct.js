module.exports = mapProduct = (product) => {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
    imageUrl: product.imageUrl,
  };
};
