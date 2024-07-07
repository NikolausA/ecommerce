import { request } from "../utils";
import { ACTION_TYPE } from "./action-type";

export const deleteProductAsync = (productId) => (dispatch) => {
  return request(`/api/products/${productId}`, "DELETE").then(({ data }) => {
    if (data.deletedCount === 1) {
      dispatch({
        type: ACTION_TYPE.DELETE_PRODUCT,
        payload: productId,
      });
    }
  });
};
