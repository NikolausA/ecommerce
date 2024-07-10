import { ACTION_TYPE } from "../actions";

const initialCartState = [];

export const cartReducer = (state = initialCartState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.ADD_TO_CART:
      return [...state, payload];
    case ACTION_TYPE.INCREASE_QUANTITY:
      return state.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case ACTION_TYPE.DECREASE_QUANTITY:
      return state.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    case ACTION_TYPE.EMPTY_CART:
      return initialCartState;
    default:
      return state;
  }
};
