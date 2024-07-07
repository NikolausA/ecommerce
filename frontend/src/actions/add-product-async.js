import { ACTION_TYPE } from "./action-type";
import { request } from "../utils";

export const addProductAsync = (newProduct) => (dispatch) => {
  return request("/api/products", "POST", newProduct).then(({ data }) => {
    console.log("data from action", data);
    dispatch({
      type: ACTION_TYPE.ADD_PRODUCT,
      payload: data,
    });
  });
};
