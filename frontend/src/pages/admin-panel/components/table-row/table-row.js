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
  price,
  quantity,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <div className="id-column">{isHeader ? "id" : id}</div>
      <div className="name-column">{isHeader ? `Название` : name}</div>
      <div className="category-column">{isHeader ? `Категория` : category}</div>
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
            <StyledIcon className="fa fa-pencil" />
            <StyledIcon className="fa fa-trash-o" />
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
  }

  & :last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & .id-column {
    width: 5%;
  }

  & .name-column {
    width: 20%;
  }

  & .category-column {
    width: 15%;
  }

  & .price-column {
    width: 10%;
  }

  & .quantity-column {
    width: 15%;
  }

  & .image-column {
    width: 22%;
  }

  & .actions-column {
    width: 13%;
  }
`;
