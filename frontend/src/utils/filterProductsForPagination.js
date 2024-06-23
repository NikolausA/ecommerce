export const filterProductsForPagination = (
  products,
  page,
  productsPerPage
) => {
  if (typeof products === "object") {
    const arrProducts = Object.values(products);
    // console.log(arrProducts[1]);
  }
  // products.fllter((index) => index >= 0 && index < 9);
};

// products.fllter(
//   (index) =>
//     index >= productsPerPage * (page - 1) && index < productsPerPage * page
// );

// filterProductsForPagination(products, page, PRODUCTS_PER_PAGE)
