import { SET_ROUND_MOVE, SET_CURRENT_ROUND, SET_WINNER } from '../Actions/rounds.js';

const setRoundMove = (state, moves) => ({
  ...state,
  [`round${moves.roundNumber}`]: moves
});

export const rounds = (state = {}, action) => {
  switch (action.type) {
    case SET_ROUND_MOVE:
      return setRoundMove(state, action.moves);
    case SET_CURRENT_ROUND:
      return { ...state, currentRound: action.currentRound };
    default:
      return state;
  }
};

export const winner = (state = '', action) => {
  switch (action.type) {
    case SET_WINNER:
      return action.winner;
    default:
      return state;
  }
};
