import { combineReducers } from '@reduxjs/toolkit'
import { gameReducer } from './reducers/gameReducer.js'
import { authReducer } from './reducers/authReducer'
import { playerReducer } from './reducers/playerReducer.js'
import { modalReducer } from './reducers/modalReducer.js'
import { historyReducer } from './reducers/historyReducer.js'
import { toastReducer } from './reducers/toastReducer.js'


export default combineReducers({
  gameReducer: gameReducer,
  authReducer: authReducer,
  playerReducer: playerReducer,
  modalReducer: modalReducer,
  historyReducer: historyReducer,
  toastReducer: toastReducer,
})
