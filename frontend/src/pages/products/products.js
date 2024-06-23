import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../selectors";
import { Pagination } from "../../components";
import { ProductCard } from "./components";
import { filterProductsForPagination } from "../../utils";
import { PRODUCTS_PER_PAGE } from "../../constants";
import styled from "styled-components";

const ProductsContainer = ({ className }) => {
  const [page, setPage] = useState(1);
  // const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const lastPage =
    products.length <= PRODUCTS_PER_PAGE
      ? 1
      : products.length % PRODUCTS_PER_PAGE
      ? products.length / PRODUCTS_PER_PAGE
      : products.length / PRODUCTS_PER_PAGE + 1;
  // const filteredProducts = filterProductsForPagination(products, page, PRODUCTS_PER_PAGE);

  return (
    <div className={className}>
      <div className="catalog-title">
        <h2 className="title">Men</h2>
      </div>
      <div className="container">
        {products.map(({ _id, name, category, price, imageUrl }) => (
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
      <Pagination page={page} lastPage={lastPage} setPage={setPage} />
    </div>
  );
};

export const Products = styled(ProductsContainer)`
  width: 1170px;
  margin: 0 auto;
  padding: 0 15px;

  & .catalog-title {
    width: 100%;
    margin-bottom: 45px;
    display: flex;
    justify-content: start;
  }

  & .title {
    padding: 10px 20px;
    background-color: #19c880;
    color: #ffffff;
    font-weight: bold;
    font-size: 24px;
  }

  & .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 -10px;
  }
`;
