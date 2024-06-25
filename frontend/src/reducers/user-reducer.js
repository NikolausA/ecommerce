import { ACTION_TYPE } from "../actions";
import { ROLE } from "../constants";

const initialUserState = {
  id: null,
  login: null,
  role: null,
};

export const userReducer = (state = initialUserState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.SET_USER:
      console.log(payload);
      return { ...state, ...payload };
    case ACTION_TYPE.LOGOUT:
      return initialUserState;
    default:
      return state;
  }
};
