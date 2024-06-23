import { request } from "../utils";
import { ACTION_TYPE } from "../actions";

export const setProductsAsync = () => (dispatch) => {
  return request(`api/products`).then(({ data }) => {
    dispatch({
      type: ACTION_TYPE.SET_PRODUCTS,
      payload: data,
    });
  });
};
