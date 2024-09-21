import { takeEvery, put, delay, call } from 'redux-saga/effects';
import {OPEN_LOOTBOX, lootBoxOpened, updateTimer, LOAD_LOOTBOXES, lootBoxesLoaded, START_NEW_ROUND, loadLootBoxes} from '../actions/gameActions';
import axios from "axios";
import {fetchPlayers} from "../actions/playerActions";
import {openModalAction} from "../actions/modalAction";
import {loadHistory} from "../actions/historyAction";
import {showToast} from "../actions/toastAction";

function* handleLoadLootBox(action) {
  console.log('action',action);
  const response = yield call(axios.get, 'http://localhost:3001/lootbox', action.payload);
  const { lootBoxes } = response.data;
  yield put(lootBoxesLoaded(lootBoxes));
}

function* handleOpenLootBox(action) {
  try {
    const { id, token } = action.payload;
    const {data} = yield call(axios.post, `http://localhost:3001/lootbox/open/${id}`, {},{headers: { Authorization: token}})

    yield put(lootBoxOpened(id, data?.reward, data?.history));
    yield put(openModalAction(`You opened LootBox ${data?.lootBox?.name} and received: ${data.reward} Gold Coins!`))
    yield put(fetchPlayers());
    yield put(loadHistory(token));
    yield put(loadLootBoxes());
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
  }
}


function* startNewRound() {
  try {
    const {data} = yield call(axios.post, `http://localhost:3001/lootbox/default`)
    const { lootBoxes } = data;
    yield put(lootBoxesLoaded(lootBoxes));
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
  }
}

function* startNewTimer() {
  let timeRemaining = 120;
  while (timeRemaining > 0) {
    yield delay(1000);
    timeRemaining--;
    yield put(updateTimer(timeRemaining));
  }

  yield put({ type: LOAD_LOOTBOXES });
}

export function* gameSaga() {
  yield takeEvery(LOAD_LOOTBOXES, handleLoadLootBox);
  yield takeEvery(OPEN_LOOTBOX, handleOpenLootBox);
  yield takeEvery(START_NEW_ROUND, startNewRound);
}
