import { combineReducers } from 'redux';
import { level, id } from './config';
import { players } from './players.js';
import { rounds, winner } from './rounds.js';
import { RESET_APP } from '../Actions/config.js';

const appReducer = combineReducers({
  id,
  level,
  players,
  rounds,
  winner
});

export default (state, action) => {
  if (action.type === RESET_APP) {
    state = {};
  }

  return appReducer(state, action);
};
