import { ACTION_TYPE } from "../actions";

const initialAppState = {
  isEditing: false,
  modal: {
    isOpen: false,
    text: "",
    onConfirm: () => {},
    onCancel: () => {},
  },
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPE.OPEN_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          ...payload,
          isOpen: true,
        },
      };
    case ACTION_TYPE.SET_MODAL_IS_EDITING:
      return { ...state, isEditing: true };
    case ACTION_TYPE.CLOSE_MODAL:
      return initialAppState;
    default:
      return state;
  }
};
