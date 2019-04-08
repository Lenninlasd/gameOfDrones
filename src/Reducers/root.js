import { level, id } from './config';
import { players } from './players.js';
import { rounds, winner } from './rounds.js';

export default (state = {}, action) => ({
  id: id(state.id, action),
  level: level(state.level, action),
  players: players(state.players, action),
  rounds: rounds(state.rounds, action),
  winner: winner(state.winner, action)
});
