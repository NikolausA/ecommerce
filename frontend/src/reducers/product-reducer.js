import { ACTION_TYPE } from "../actions";

const initialProductState = {
  name: "",
  category: "",
  description: "",
  price: null,
  quantity: null,
};

export const productReducer = (
  state = initialProductState,
  { type, payload }
) => {
  switch (type) {
    case ACTION_TYPE.SET_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
