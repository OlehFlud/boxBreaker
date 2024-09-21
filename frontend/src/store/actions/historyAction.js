export const LOAD_HISTORY = 'LOAD_HISTORY';
export const HISTORY_LOADED = 'HISTORY_LOADED';

export const loadHistory = (token) => ({ type: LOAD_HISTORY,  payload: { token }  });

export const historyLoaded = (history) => ({
  type: HISTORY_LOADED,
  payload: { history },
});
