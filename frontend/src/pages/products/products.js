import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../selectors";
import { Pagination } from "../../components";
import { ProductCard, Search } from "./components";
import { filterProducts } from "../../utils";
import { PRODUCTS_PER_PAGE } from "../../constants";
import styled from "styled-components";

const ProductsContainer = ({ className }) => {
  const { category } = useParams();
  const [page, setPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  if (category !== currentCategory) {
    setCurrentCategory(category);
    setPage(1);
  }
  const products = useSelector(selectProducts);
  const poductsByCategory = products.filter(
    (product) => product.category === category
  );
  const onChange = ({ target }) => {
    setSearchPhrase(target.value);
  };

  const onSearchHandler = (value) => {
    setPage(1);
    setSearchPhrase(value);
  };

  const onResetSearch = () => {
    setSearchPhrase("");
  };

  const { lastPage, filteredProducts } = filterProducts(
    poductsByCategory,
    page,
    PRODUCTS_PER_PAGE,
    searchPhrase
  );

  return (
    <div className={className}>
      <div className="catalog-header">
        <h2 className="title">{category}</h2>
        <Search
          searchPhrase={searchPhrase}
          onChange={onChange}
          onSearchHandler={onSearchHandler}
          onResetSearch={onResetSearch}
        />
      </div>
      <div className="container">
        {filteredProducts.map(({ _id, name, category, price, imageUrl }) => (
          <ProductCard
            key={_id}
            id={_id}
            name={name}
            category={category}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
      </div>
      {lastPage > 1 && (
        <Pagination page={page} lastPage={lastPage} setPage={setPage} />
      )}
    </div>
  );
};

export const Products = styled(ProductsContainer)`
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;

  & .catalog-header {
    display: flex;
    justify-content: start;
    align-items: center;
    column-gap: 300px;
  }

  & .catalog-title {
    width: 100%;
    display: flex;
    justify-content: start;
  }

  & .title {
    padding: 10px 20px;
    background-color: #19c880;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
  }

  & .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
`;
