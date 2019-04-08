import { SET_STATUS, SET_GAME_ID } from '../Actions/config.js';

export const level = (state = 1, action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.level;
    default:
      return state;
  }
};

export const id = (state = null, action) => {
  switch (action.type) {
    case SET_GAME_ID:
      return action.id;
    default:
      return state;
  }
};
