import {LOAD_HISTORY, HISTORY_LOADED} from "../actions/historyAction";

const initialState = {
  history: []
};

export const historyReducer = (state = initialState, action) => {
  console.log('action',action);
  switch (action.type) {
    case LOAD_HISTORY:
      return {
        ...state,
      };
    case HISTORY_LOADED:
      return {
        ...state,
        history: action.payload?.history,
      };
    default:
      return state;
  }
};
