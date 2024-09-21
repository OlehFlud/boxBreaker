import { all } from 'redux-saga/effects'
import { gameSaga } from './sagas/gameSaga.js'
import { playerSaga } from './sagas/playerSaga.js'
import { authSaga } from './sagas/authSaga.js'
import { historySaga } from './sagas/historySaga.js'
import { toastSaga } from './sagas/toastSaga.js'


function* rootSaga() {
  yield all([
    gameSaga(),
    playerSaga(),
    authSaga(),
    historySaga(),
    toastSaga()
  ])
}

export default rootSaga
