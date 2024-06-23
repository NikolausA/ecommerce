import styled from "styled-components";

const ProductContainer = ({ className }) => {
  return (
    <div className={className}>
      <div className="product-image">
        <img src="" alt="" />
      </div>
      <div className="product-info">
        <h4 className="product-name">Product name</h4>
        <p className="product-price">Price</p>
        <p className="product-description">Product description</p>
        <div className="add-button">Add To Cart</div>
      </div>
    </div>
  );
};

export const Product = styled(ProductContainer)`
  display: flex;
  justify-content: space-between;
  background-color: #fff;

  & .product-image {
    width: 450px;
    height: 450px;
    background-color: lightgray;
  }

  & .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
  }

  & .product-name {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #0c0c0c;
  }

  & .product-price {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    color: #0c0c0c;
  }

  & .add-button {
    margin-top: 35px;
    padding: 10px 30px;
    background-color: #8019c8;
    color: #ffffff;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }
`;
