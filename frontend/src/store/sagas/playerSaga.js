import { call, put, takeEvery } from 'redux-saga/effects';
import {
  PLAYER_JOINED,
  PLAYER_LEFT,
  UPDATE_PLAYER_REWARDS,
  FETCH_PLAYERS_REQUEST,
  FETCH_PLAYERS_SUCCESS,
  FETCH_PLAYERS_FAILURE,
  UPDATE_PLAYER_STATUS_REQUEST,
  UPDATE_PLAYER_STATUS_SUCCESS,
  UPDATE_PLAYER_STATUS_FAILURE,
  AWARD_PLAYER_REQUEST,
  AWARD_PLAYER_SUCCESS,
  AWARD_PLAYER_FAILURE
} from '../actions/playerActions';
import axios from "axios";
import {showToast} from "../actions/toastAction";
import {API_URL} from "../../const/index";

export function* fetchPlayersSaga() {
  try {
    const players = yield call(axios.get, `${API_URL}/users`); // API виклик для логіну

    console.log('players',players);
    yield put({ type: FETCH_PLAYERS_SUCCESS, payload: players?.data });
  } catch (error) {
    yield put({ type: FETCH_PLAYERS_FAILURE, error });
  }
}

function* updatePlayerStatusSaga(action) {
  const { playerId, status } = action.payload;
  try {
    const updatedPlayer = {}
    yield put({ type: UPDATE_PLAYER_STATUS_SUCCESS, payload: updatedPlayer });
  } catch (error) {
    yield put({ type: UPDATE_PLAYER_STATUS_FAILURE, error });
  }
}

function* awardPlayerSaga(action) {
  const { playerId, reward } = action.payload;
  try {
    // const updatedPlayer = yield call(api.awardPlayer, playerId, reward);
    const updatedPlayer = {}

    yield put({ type: AWARD_PLAYER_SUCCESS, payload: updatedPlayer });
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
    yield put({ type: AWARD_PLAYER_FAILURE, error });
  }
}

function* playerJoinedSaga(action) {
  yield put({
    type: PLAYER_JOINED,
    payload: { player: action.payload.player }
  });
}

function* playerLeftSaga(action) {
  const { playerId } = action.payload;
  yield put({
    type: PLAYER_LEFT,
    payload: { playerId }
  });
}

function* updatePlayerRewardsSaga(action) {
  try {
    const { playerId, rewards } = action.payload;
    yield put({
      type: UPDATE_PLAYER_REWARDS,
      payload: { playerId, rewards }
    });
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
  }
}

export function* playerSaga() {
  yield takeEvery(FETCH_PLAYERS_REQUEST, fetchPlayersSaga);
  yield takeEvery(UPDATE_PLAYER_STATUS_REQUEST, updatePlayerStatusSaga);
  yield takeEvery(AWARD_PLAYER_REQUEST, awardPlayerSaga);
  yield takeEvery(PLAYER_JOINED, playerJoinedSaga);
  yield takeEvery(PLAYER_LEFT, playerLeftSaga);
  yield takeEvery(UPDATE_PLAYER_REWARDS, updatePlayerRewardsSaga);
}
