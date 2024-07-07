import { ACTION_TYPE } from "../actions";

const initialProductsState = [];

export const productsReducer = (
  state = initialProductsState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPE.SET_PRODUCTS:
      return payload;
    case ACTION_TYPE.ADD_PRODUCT:
      return [...state, payload];
    case ACTION_TYPE.UPDATE_PRODUCT:
      return state.map((product) =>
        product._id === payload._id ? payload : product
      );
    case ACTION_TYPE.DELETE_PRODUCT:
      return state.filter((item) => item._id !== payload);
    default:
      return state;
  }
};
