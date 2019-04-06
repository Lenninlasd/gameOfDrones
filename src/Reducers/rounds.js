import { SET_ROUND_MOVE, SET_CURRENT_ROUND } from '../Actions/rounds.js';

const getRoundWinner = ({ player1, player2 }) => {
  if (player1 === player2) return 'draw';

  if (player1 === 'paper' && player2 === 'rock') {
    return 'player1';
  } else if (player1 === 'rock' && player2 === 'scissors') {
    return 'player1';
  } else if (player1 === 'scissors' && player2 === 'paper') {
    return 'player1';
  } else {
    return 'player2';
  }
};

const setRoundMove = (state, roundNumber, moves) => {
  return {
    ...state,
    [`round${roundNumber}`]: { ...moves, winner: getRoundWinner(moves) }
  };
};

export const rounds = (state = {}, action) => {
  switch (action.type) {
    case SET_ROUND_MOVE:
      return setRoundMove(state, action.roundNumber, action.moves);
    case SET_CURRENT_ROUND:
      return { ...state, currentRound: action.currentRound };
    default:
      return state;
  }
};
