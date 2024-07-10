import { ACTION_TYPE } from "./action-type";

export const increaseQuantityInCart = (productId) => ({
  type: ACTION_TYPE.INCREASE_QUANTITY,
  payload: productId,
});
