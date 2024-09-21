import {LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/authAction';

const initialState = {
  token: localStorage.getItem('token'),
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

export const authReducer = (state = initialState, action) => {
  console.log('action',action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
}
