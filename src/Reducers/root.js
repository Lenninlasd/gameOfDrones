import { level } from './config';
import { players } from './players.js';
import { rounds } from './rounds.js';

export default (state = {}, action) => ({
  level: level(state.level, action),
  players: players(state.players, action),
  rounds: rounds(state.rounds, action)
});
