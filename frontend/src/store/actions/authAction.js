export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials,
});

export const registerRequest = (credentials) => ({
  type: REGISTER_REQUEST,
  payload: credentials,
});

export const logout = (token) => ({
  type: LOGOUT,
  payload: token,
});
