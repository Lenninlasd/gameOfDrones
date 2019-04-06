import { SET_STATUS } from '../Actions/config.js';

export const level = (state = 1, action) => {
  switch (action.type) {
    case SET_STATUS:
      return action.level;
    default:
      return state;
  }
};
