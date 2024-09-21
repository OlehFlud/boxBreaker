import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_REQUEST,
  LOGOUT,
} from '../actions/authAction';
import {showToast} from "../actions/toastAction";

function* login(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:3001/auth', {
      username: action.payload?.name,
      password: action.payload?.password,
    });
    const { accessToken } = response.data;

    localStorage.setItem('token', accessToken);

    yield put({ type: LOGIN_SUCCESS, payload: accessToken });
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error.response.data.message });
  }
}


function* register(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:3001/users', action.payload);
    const { accessToken } = response.data;

    localStorage.setItem('token', accessToken);

    yield put({ type: REGISTER_SUCCESS, payload: accessToken });
  } catch (error) {
    yield put({ type: REGISTER_FAILURE, payload: error.response.data.message });
  }
}

function* logout(action) {
  try {
    const response = yield call(axios.post, 'http://localhost:3001/auth/logout', {accessToken: action.payload});
    if (response)
    localStorage.removeItem('token');

    yield put({ type: LOGOUT_SUCCESS });
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
    yield put({ type: LOGOUT_FAILURE });
  }
}

export function* authSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(LOGOUT, logout);
}
