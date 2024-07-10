import { useDispatch, useSelector } from "react-redux";
import { selectProductsFromCart } from "../../selectors";
import {
  increaseQuantityInCart,
  decreaseQuantityInCart,
  EMPTY_CART,
} from "../../actions";
import styled from "styled-components";

const CartContaner = ({ className }) => {
  const dispatch = useDispatch();
  const productsToCart = useSelector(selectProductsFromCart);
  const cartTotalAmount = productsToCart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );

  const setCartTitle = () => {
    let cartTitle = "";
    if (!productsToCart.length) {
      cartTitle = "В вашей корзине нет товаров";
    } else if (productsToCart.length === 1) {
      cartTitle = `В вашей корзине ${productsToCart.length} товар`;
    } else if ((productsToCart.length > 1) & (productsToCart.length < 5)) {
      cartTitle = `В вашей корзине ${productsToCart.length} товара`;
    } else if (productsToCart.length > 5) {
      cartTitle = `В вашей корзине ${productsToCart.length} товаров`;
    }

    return cartTitle;
  };

  const onIncreaseHandler = (id) => {
    dispatch(increaseQuantityInCart(id));
  };

  const onDecreaseHandler = (id) => {
    dispatch(decreaseQuantityInCart(id));
  };

  const onEmptyCartHandler = () => {
    dispatch(EMPTY_CART);
  };
  return (
    <div className={className}>
      <h3>{setCartTitle()}</h3>
      <div className="cart-header">
        <div className="product-name">Наименование</div>
        <div className="product-price">Цена</div>
        <div className="product-qty">Количество</div>
        <div className="product-total">Сумма</div>
      </div>
      <ul>
        {productsToCart.map(({ id, name, price, quantity, imageUrl }) => (
          <li key={id} className="product-row">
            <div className="product-name">
              <img src={imageUrl} alt={name} height="100" />
              <p>{name}</p>
            </div>
            <div className="product-price">
              {price}
              <i className="fa fa-rub"></i>
            </div>
            <div className="product-qty">
              <button
                className="change-qty-btn"
                onClick={() => onDecreaseHandler(id)}
                disabled={quantity === 1}
              >
                -
              </button>
              {quantity}
              <button
                className="change-qty-btn"
                onClick={() => onIncreaseHandler(id)}
              >
                +
              </button>
            </div>
            <div className="product-total">
              {price * quantity}
              <i className="fa fa-rub"></i>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <p className="total-text">Общая стоимость товаров в корзине:</p>
        <p className="total-sum">
          {cartTotalAmount}
          <i className="fa fa-rub"></i>
        </p>
      </div>
      <div className="cart-buttons">
        <button
          className="clear-cart"
          type="button"
          onClick={onEmptyCartHandler}
        >
          Очистить корзину
        </button>
        <button className="checkout" type="button">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export const Cart = styled(CartContaner)`
  padding: 10px 20px;
  background-color: #fff;
  text-align: center;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .cart-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
    border-bottom: 2px solid darkgrey;
  }

  & ul {
    margin: 0;
    padding: 0;
  }

  & .product-row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
    margin: 10px 0;
  }

  & .product-name {
    width: 40%;
    display: flex;
    justify-content: space-around;
    padding: 5px 40px 5px 40px;
  }

  & .product-price {
    width: 20%;
  }

  & .product-quantity {
    width: 20%;
  }

  & .change-qty-btn {
    background-color: #fff;
    margin: 0 5px;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
  }

  & .change-qty-btn:disabled {
    visibility: hidden;
  }

  & .product-total {
    width: 20%;
  }

  & .fa-rub {
    margin-left: 5px;
  }

  & .total {
    display: flex;
    justify-content: end;
    column-gap: 10px;
    margin-top: 10px;
    font-size: 1.1rem;
    font-weight: 700;
    border-top: 2px solid darkgrey;
  }

  & .clear-cart,
  .checkout {
    margin: 35px 5px 0 5px;
    padding: 10px 30px;
    background-color: #8019c8;
    color: #ffffff;
    border-radius: 5px;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
  }

  & button:hover {
    text-decoration: none;
    background-color: #1f0453;
  }
`;
