import { ACTION_TYPE } from "../actions";

const initialProductsState = [];

export const productsReducer = (
  state = initialProductsState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return payload;
    default:
      return state;
  }
};
