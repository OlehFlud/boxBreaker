import {HIDE_TOAST, SHOW_TOAST} from "../actions/toastAction";

const initialState = {
  message: '',
  toastType: '',
};

export const toastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        message: action.payload.message,
        toastType: action.payload.toastType,
      };
    case HIDE_TOAST:
      return initialState;
    default:
      return state;
  }
};

export default toastReducer;
