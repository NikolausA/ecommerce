import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../actions";
import { selectProducts } from "../../selectors";
import styled from "styled-components";

const ProductContainer = ({ className }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector(selectProducts);
  const { name, price, description, imageUrl } = products.find(
    (product) => product._id === id
  );

  const onAddToCartHandler = () => {
    dispatch(addToCart({ id, name, price, quantity: 1, imageUrl }));
  };

  return (
    <div className={className}>
      <div className="product-image">
        <img src={imageUrl} alt="" height="275" />
      </div>
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">
          {price}
          <i className="fa fa-rub"></i>
        </p>
        <p className="product-description">{description}</p>
        <div className="add-button" onClick={onAddToCartHandler}>
          Add To Cart
        </div>
      </div>
    </div>
  );
};

export const Product = styled(ProductContainer)`
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
  padding: 15px;

  & .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
  }

  & .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    column-gap: 10px;
    margin-left: 30px;
  }

  & .product-name {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
    line-height: 1.2;
    color: #484848;
  }

  & .product-price {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.2;
    color: #484848;
  }

  & .fa-rub {
    margin-left: 10px;
  }

  & .add-button {
    width: fit-content;
    margin-top: 20px;
    padding: 10px 30px;
    background-color: #8019c8;
    color: #ffffff;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }

  & .add-button:hover {
    background-color: #1f0453;
  }
`;
