/* eslint-disable no-console */
import axios from 'axios';
import { setLevel } from './config.js';
import config from '../settings.js';

export const SET_ROUND_MOVE = 'SET_ROUND_MOVE';
export const SET_CURRENT_ROUND = 'SET_CURRENT_ROUND';
export const SET_WINNER = 'SET_WINNER';

export const setRoundMove = moves => ({ type: SET_ROUND_MOVE, moves });
export const setWinner = winner => ({ type: SET_WINNER, winner });

export const finishRound = (id, roundNumber, moves) => dispatch => {
  axios.put(`${config.baseUrl}/api/games/rounds/${id}`, { ...moves, roundNumber }).then(res => {
    const { winner, rounds } = res.data;

    dispatch(setRoundMove(rounds[rounds.length - 1]));

    if (winner) {
      dispatch(setWinner(winner));
      dispatch(setLevel(3));
    }
  });
};
