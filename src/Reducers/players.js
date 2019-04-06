import { ADD_PLAYERS } from '../Actions/players.js';

export const players = (state = { player1: '', player2: '' }, action) => {
  switch (action.type) {
    case ADD_PLAYERS:
      return action.players;
    default:
      return state;
  }
};
