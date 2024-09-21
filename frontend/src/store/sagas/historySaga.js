import {takeEvery, put, delay, call} from 'redux-saga/effects';
import axios from "axios";
import {historyLoaded, LOAD_HISTORY} from "../actions/historyAction";
import {showToast} from "../actions/toastAction";

function* handleLoadHistory(action) {
  try {
    const {token} = action.payload;
    const response = yield call(axios.get, 'http://localhost:3001/history/open-box', {headers: {Authorization: token}});
    const {histories} = response?.data;
    yield put(historyLoaded(histories));
  } catch (error) {
    yield put(showToast(error?.message, 'error'))
  }
}

export function* historySaga() {
  yield takeEvery(LOAD_HISTORY, handleLoadHistory);
}
