import { ACTION_TYPE } from "./action-type";
import { request } from "../utils";

export const updateProductAsync = (productId, updatedProduct) => (dispatch) => {
  request(`api/products/${productId}`, "PATCH", updatedProduct).then(
    ({ data }) => {
      dispatch({
        type: ACTION_TYPE.UPDATE_PRODUCT,
        payload: data,
      });
    }
  );
};
