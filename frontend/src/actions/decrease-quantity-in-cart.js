import { ACTION_TYPE } from "./action-type";

export const decreaseQuantityInCart = (productId) => ({
  type: ACTION_TYPE.DECREASE_QUANTITY,
  payload: productId,
});
