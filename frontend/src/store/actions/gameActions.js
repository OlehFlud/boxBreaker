export const LOAD_LOOTBOXES = 'LOAD_LOOTBOXES';
export const LOOTBOXES_LOADED = 'LOOTBOXES_LOADED';
export const OPEN_LOOTBOX = 'OPEN_LOOTBOX';
export const MAKE_INACTIVE = 'MAKE_INACTIVE';
export const LOOTBOX_OPENED = 'LOOTBOX_OPENED';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const START_NEW_ROUND = 'START_NEW_ROUND';

export const loadLootBoxes = () => ({ type: LOAD_LOOTBOXES });
export const openLootBox = (id, token) => ({ type: OPEN_LOOTBOX, payload: { id, token } });
export const makeInactiveLootBox = (id) => ({ type: MAKE_INACTIVE, payload: { id } });

export const lootBoxOpened = (id, reward, history) => ({
  type: LOOTBOX_OPENED,
  payload: { id, reward },
});

export const lootBoxesLoaded = (lootBoxes) => ({
  type: LOOTBOXES_LOADED,
  payload: { lootBoxes },
});

export const updateTimer = (timeRemaining) => ({
  type: UPDATE_TIMER,
  payload: { timeRemaining },
});

export const startNewRound = () => ({
  type: START_NEW_ROUND,
});
