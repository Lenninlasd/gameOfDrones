export const SET_ROUND_MOVE = 'SET_ROUND_MOVE';
export const SET_CURRENT_ROUND = 'SET_CURRENT_ROUND';

export const setRoundMove = (roundNumber, moves) => ({
  type: SET_ROUND_MOVE,
  roundNumber,
  moves
});
