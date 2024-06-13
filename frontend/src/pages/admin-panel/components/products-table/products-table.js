import styled from "styled-components";
import { useState, useEffect } from "react";
import { TableRow } from "../table-row/table-row";
import { request } from "../../../../utils";

const ProductsTableContainer = ({ className }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request("api/admin-panel/products").then(({ data }) => setProducts(data));
  }, []);

  return (
    <div className={className}>
      <h2>Редактирование каталог товаров</h2>
      <TableRow isHeader={true}>
        <div className="id-column">id</div>
        <div className="name-column">Название</div>
        <div className="category-column">Категория</div>
        <div className="price-column">Цена</div>
        <div className="quantity-column">Количество</div>
        <div className="image-column">Фото</div>
        <div className="actions-column">Действия</div>
      </TableRow>
      {products ? (
        products.map(({ id, name, category, price, quantity, imageUrl }) => (
          <TableRow
            isHeader={false}
            key={id}
            id={id}
            name={name}
            category={category}
            price={price}
            quantity={quantity}
            imageUrl={imageUrl}
          ></TableRow>
        ))
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export const ProductsTable = styled(ProductsTableContainer)`
  width: 75%;
  display: flex;
  flex-direction: column;

  & > h2 {
    text-align: center;
  }
`;
