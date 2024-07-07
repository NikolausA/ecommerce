import styled from "styled-components";

const StyledIcon = styled.i`
  margin-left: 15px;
`;

const TableRowContainer = ({
  className,
  isHeader,
  id,
  name,
  category,
  description,
  price,
  quantity,
  imageUrl,
  onHandleEdit,
  onHandleDelete,
}) => {
  return (
    <div className={className}>
      <div className="id-column">{isHeader ? "id" : id}</div>
      <div className="name-column">{isHeader ? `Название` : name}</div>
      <div className="category-column">{isHeader ? `Категория` : category}</div>
      <div className="description-column">
        {isHeader ? `Описание` : description}
      </div>
      <div className="price-column">{isHeader ? `Цена` : price}</div>
      <div className="quantity-column">
        {isHeader ? `Количество` : quantity}
      </div>
      <div className="image-column">{isHeader ? `Фото` : imageUrl}</div>
      <div className="actions-column">
        {isHeader ? (
          <span>Действия</span>
        ) : (
          <>
            <StyledIcon className="fa fa-pencil" onClick={onHandleEdit} />
            <StyledIcon className="fa fa-trash-o" onClick={onHandleDelete} />
          </>
        )}
      </div>
    </div>
  );
};

export const TableRow = styled(TableRowContainer)`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ isHeader }) => (isHeader ? "700" : "normal")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  & > div {
    margin: 1px;
    padding: 2px 10px;
    background-color: #fff;
    text-align: center;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .id-column {
    width: 10%;
  }

  & .name-column {
    width: 15%;
  }

  & .category-column {
    width: 10%;
  }

  & .description-column {
    width: 15%;
  }

  & .price-column {
    width: 10%;
  }

  & .quantity-column {
    width: 14%;
  }

  & .image-column {
    width: 18%;
  }

  & .actions-column {
    width: 8%;
  }
`;
