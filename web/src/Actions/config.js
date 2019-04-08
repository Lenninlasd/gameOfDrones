export const SET_STATUS = 'SET_STATUS';
export const SET_GAME_ID = 'SET_GAME_ID';
export const RESET_APP = 'RESET_APP';

export const setLevel = level => ({
  type: SET_STATUS,
  level
});

export const setGameId = id => ({
  type: SET_GAME_ID,
  id
});