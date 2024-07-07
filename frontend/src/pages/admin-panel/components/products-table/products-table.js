import { useDispatch, useSelector } from "react-redux";
import {
  CLOSE_MODAL,
  openModal,
  deleteProductAsync,
  SET_MODAL_IS_EDITING,
  setProduct,
} from "../../../../actions";
import { selectProducts } from "../../../../selectors";
import { TableRow } from "../table-row/table-row";
import styled from "styled-components";

const ProductsTableContainer = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const onHandleEdit = (id, name, category, description, price, quantity) => {
    dispatch(setProduct({ id, name, category, description, price, quantity }));
    dispatch(SET_MODAL_IS_EDITING);
    dispatch(openModal({}));
  };

  const onHandleDelete = (id, name) => {
    dispatch(
      openModal({
        text: `Вы действительно хотите удалить - ${name}`,
        onConfirm: () => {
          dispatch(deleteProductAsync(id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

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
        products.map(
          ({ _id, name, category, description, price, quantity, imageUrl }) => (
            <TableRow
              isHeader={false}
              key={_id}
              id={_id}
              name={name}
              category={category}
              description={description}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              onHandleEdit={() =>
                onHandleEdit(_id, name, category, description, price, quantity)
              }
              onHandleDelete={() => onHandleDelete(_id, name)}
            ></TableRow>
          )
        )
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
