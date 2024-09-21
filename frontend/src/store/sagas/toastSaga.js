import { put, takeEvery } from 'redux-saga/effects';
import { SHOW_TOAST, hideToast } from '../actions/toastAction';
import { toast } from 'react-toastify';

function* showToastSaga(action) {
  const { message, toastType } = action.payload;

  switch (toastType) {
    case 'success':
      toast.success(message);
      break;
    case 'error':
      toast.error(message);
      break;
    case 'info':
      toast.info(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    default:
      toast(message);
  }

  yield put(hideToast());
}

export function* toastSaga() {
  yield takeEvery(SHOW_TOAST, showToastSaga);
}
