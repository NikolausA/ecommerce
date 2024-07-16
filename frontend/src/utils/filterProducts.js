export const filterProducts = (
  products,
  page,
  productsPerPage,
  searchPhrase
) => {
  const startIndex = (page - 1) * productsPerPage;

  if (searchPhrase) {
    const foundProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchPhrase)
    );
    const lastPage = Math.ceil(foundProducts.length / productsPerPage);
    const filteredProducts = foundProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );
    return { lastPage, filteredProducts };
  }

  const lastPage = Math.ceil(products.length / productsPerPage);
  const filteredProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );
  return { lastPage, filteredProducts };
};
