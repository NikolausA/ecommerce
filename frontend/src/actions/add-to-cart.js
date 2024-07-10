import { ACTION_TYPE } from "./action-type";

export const addToCart = (productId) => ({
  type: ACTION_TYPE.ADD_TO_CART,
  payload: productId,
});
