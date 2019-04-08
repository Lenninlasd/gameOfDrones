/* eslint-disable no-console */
import axios from 'axios';
import { setLevel, setGameId } from './config.js';
import config from '../settings.js';

export const ADD_PLAYERS = 'ADD_PLAYERS';

export const addPlayers = players => ({
  type: ADD_PLAYERS,
  players
});

export const submitPlayers = players => dispatch => {
  axios
    .post(`${config.baseUrl}/api/games`, { players })
    .then(res => {
      dispatch(setGameId(res.data._id));
      dispatch(addPlayers(res.data.players));
      dispatch(setLevel(2));
    })
    .catch(err => {
      console.log(err, err.response);
      if (err.response.status === 400) {
        alert(err.response.data);
      }
    });
};
