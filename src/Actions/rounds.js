import { setLevel } from './config.js';

export const SET_ROUND_MOVE = 'SET_ROUND_MOVE';
export const SET_CURRENT_ROUND = 'SET_CURRENT_ROUND';
export const SET_WINNER = 'SET_WINNER';

export const setRoundMove = (roundNumber, moves) => ({
  type: SET_ROUND_MOVE,
  roundNumber,
  moves
});

export const setWinnerAndRusults = (dispatch, winner) => {
  dispatch({ type: SET_WINNER, winner });
  dispatch(setLevel(3));
};
