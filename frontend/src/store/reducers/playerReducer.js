import {
  AWARD_PLAYER_FAILURE, AWARD_PLAYER_REQUEST, AWARD_PLAYER_SUCCESS,
  FETCH_PLAYERS_FAILURE,
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  PLAYER_JOINED,
  PLAYER_LEFT,
  UPDATE_PLAYER_REWARDS, UPDATE_PLAYER_STATUS_FAILURE, UPDATE_PLAYER_STATUS_REQUEST, UPDATE_PLAYER_STATUS_SUCCESS
} from "../actions/playerActions";

const initialState = {
  players: [],
  loading: false,
  error: null
};

export const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_PLAYERS_SUCCESS:
      return { ...state, loading: false, players: action.payload };
    case FETCH_PLAYERS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case PLAYER_JOINED:
      return {
        ...state,
        players: [...state.players, action.payload.player]
      };
    case PLAYER_LEFT:
      return {
        ...state,
        players: state.players?.map((player) =>
          player?.id === action.payload.playerId
            ? { ...player, online: false }
            : player
        )
      };
    case UPDATE_PLAYER_STATUS_REQUEST:
      return { ...state, loading: true };
    case UPDATE_PLAYER_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        players: state.players?.map((player) =>
          player?.id === action.payload?.id
            ? action.payload
            : player
        )
      };
    case UPDATE_PLAYER_STATUS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case AWARD_PLAYER_REQUEST:
      return { ...state, loading: true };
    case AWARD_PLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        players: state.players?.map((player) =>
          player?.id === action.payload?.id
            ? action.payload
            : player
        )
      };
    case AWARD_PLAYER_FAILURE:
      return { ...state, loading: false, error: action.error };
    case UPDATE_PLAYER_REWARDS:
      return {
        ...state,
        players: state.players?.map((player) =>
          player?.id === action.payload?.playerId
            ? { ...player, rewards: action.payload.rewards }
            : player
        )
      };
    default:
      return state;
  }
};
