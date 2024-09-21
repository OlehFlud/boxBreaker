export const PLAYER_JOINED = 'PLAYER_JOINED';
export const PLAYER_LEFT = 'PLAYER_LEFT';
export const UPDATE_PLAYER_REWARDS = 'UPDATE_PLAYER_REWARDS';

export const FETCH_PLAYERS_REQUEST = 'FETCH_PLAYERS_REQUEST';
export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const FETCH_PLAYERS_FAILURE = 'FETCH_PLAYERS_FAILURE';

export const UPDATE_PLAYER_STATUS_REQUEST = 'UPDATE_PLAYER_STATUS_REQUEST';
export const UPDATE_PLAYER_STATUS_SUCCESS = 'UPDATE_PLAYER_STATUS_SUCCESS';
export const UPDATE_PLAYER_STATUS_FAILURE = 'UPDATE_PLAYER_STATUS_FAILURE';

export const AWARD_PLAYER_REQUEST = 'AWARD_PLAYER_REQUEST';
export const AWARD_PLAYER_SUCCESS = 'AWARD_PLAYER_SUCCESS';
export const AWARD_PLAYER_FAILURE = 'AWARD_PLAYER_FAILURE';

export const playerJoined = (player) => ({
  type: PLAYER_JOINED,
  payload: { player }
});

export const playerLeft = (playerId) => ({
  type: PLAYER_LEFT,
  payload: { playerId }
});

export const updatePlayerRewards = (playerId, rewards) => ({
  type: UPDATE_PLAYER_REWARDS,
  payload: { playerId, rewards }
});

export const fetchPlayers = () => ({
  type: FETCH_PLAYERS_REQUEST
});

export const fetchPlayersSuccess = (players) => ({
  type: FETCH_PLAYERS_SUCCESS,
  payload: players
});

export const fetchPlayersFailure = (error) => ({
  type: FETCH_PLAYERS_FAILURE,
  error
});

export const updatePlayerStatus = (playerId, status) => ({
  type: UPDATE_PLAYER_STATUS_REQUEST,
  payload: { playerId, status }
});

export const updatePlayerStatusSuccess = (player) => ({
  type: UPDATE_PLAYER_STATUS_SUCCESS,
  payload: player
});

export const updatePlayerStatusFailure = (error) => ({
  type: UPDATE_PLAYER_STATUS_FAILURE,
  error
});

export const awardPlayer = (playerId, reward) => ({
  type: AWARD_PLAYER_REQUEST,
  payload: { playerId, reward }
});

export const awardPlayerSuccess = (player) => ({
  type: AWARD_PLAYER_SUCCESS,
  payload: player
});

export const awardPlayerFailure = (error) => ({
  type: AWARD_PLAYER_FAILURE,
  error
});
