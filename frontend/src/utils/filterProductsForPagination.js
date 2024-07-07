export const filterProductsForPagination = (products, page, productsPerPage) =>
  products.fllter(
    (index) =>
      index >= productsPerPage * (page - 1) && index < productsPerPage * page
  );
