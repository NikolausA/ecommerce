import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../actions";

const ProductCardContainer = ({ className, id, name, price, imageUrl }) => {
  const dispatch = useDispatch();

  const onAddToCartHandler = () => {
    dispatch(addToCart({ id, name, price, quantity: 1, imageUrl }));
  };

  return (
    <div className={className}>
      <Link className="product-content" to={`/products/${id}`}>
        <div className="product-img">
          <img
            className="img"
            src={`http://localhost:3002${imageUrl}`}
            alt={name}
          />
        </div>
        <div className="product-info">
          <h5>{name}</h5>
          <h5>
            {price}
            <i className="fa fa-rub"></i>
          </h5>
        </div>
      </Link>
      <div className="add-button" onClick={onAddToCartHandler}>
        Add To Cart
      </div>
    </div>
  );
};

export const ProductCard = styled(ProductCardContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 355px;
  margin: 0 10px 45px 10px;

  & .product-content {
    width: 100%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  & .product-img {
    display: block;
    width: 144px;
    height: 175px;
    background-color: lightgray;
    margin: 45px 0;
  }

  & .img {
    /* width: 144px;
    height: 175px;
    background-color: lightgray; */
  }

  & .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  & h5 {
    margin: 0 0 8px 0;
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2;
    color: #0c0c0c;
  }

  & i {
    margin-left: 10px;
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

  & .add-button:hover {
    text-decoration: none;
    background-color: #6f42c1;
  }
`;
