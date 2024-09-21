import {LOAD_LOOTBOXES, LOOTBOX_OPENED, LOOTBOXES_LOADED, MAKE_INACTIVE, START_NEW_ROUND, UPDATE_TIMER} from "../actions/gameActions";

const initialState = {
  lootBoxes: [],
  timer: 120,
  allOpened: false,
};

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOOTBOXES:
      return {
        ...state,
        lootBoxes: action.payload?.lootBoxes,
      };
    case LOOTBOXES_LOADED:
      return {
        ...state,
        lootBoxes: action.payload?.lootBoxes,
        allOpened: action.payload?.lootBoxes.every((box) => box.isOpened),
      };
    case LOOTBOX_OPENED:
      return {
        ...state,
        lootBoxes: state.lootBoxes?.map((box) =>
          box._id === action.payload?.id
            ? { ...box, isOpened: true, reward: action.payload?.reward }
            : box
        ),
        allOpened: state.lootBoxes?.every((box) => box.isOpened),
      };
    case MAKE_INACTIVE:
      return {
        ...state,
        lootBoxes: state.lootBoxes?.map((box) =>
          box._id === action.payload?.id
            ? { ...box, isOpened: true, reward: action.payload?.reward }
            : box
        ),
        allOpened: state.lootBoxes?.every((box) => box.isOpened),
      };
    case START_NEW_ROUND:
      return {
        ...state,
        lootBoxes: state.lootBoxes?.map((box) =>
          box._id === action.payload?.id
            ? { ...box, isOpened: true, reward: action.payload?.reward }
            : box
        ),
        allOpened: state.lootBoxes?.every((box) => box.isOpened),
      };
    case UPDATE_TIMER:
      return {
        ...state,
        timer: action.payload.timeRemaining,
      };
    default:
      return state;
  }
};
