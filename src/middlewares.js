import { SET_ROUND_MOVE, setWinnerAndRusults } from './Actions/rounds.js';

export const logger = store => next => action => {
  /*eslint no-console: ["error", { allow: ["group", "log", "info", groupEnd] }] */
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

export const isThereAWinner = store => next => action => {
  const result = next(action);

  if (action.type === SET_ROUND_MOVE) {
    const { rounds } = store.getState();

    const scores = Object.values(rounds).reduce(
      (acc, round) => {
        if (round.winner === 'player1') {
          acc[0]++;
        } else if (round.winner === 'player2') {
          acc[1]++;
        }
        return acc;
      },
      [0, 0]
    );

    if (scores[0] === 3) setWinnerAndRusults(store.dispatch, 'player1');
    if (scores[1] === 3) setWinnerAndRusults(store.dispatch, 'player2');
  }

  return result;
};
