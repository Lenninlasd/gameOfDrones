const express = require('express');
const Game = require('../Models/gameModel');

const gameRouter = express.Router();

const httpsSts = {
  error: 400,
  created: 201
};

const validForm = game => {
  if (game.players.player1 === game.players.player2) {
    return {
      status: httpsSts.error,
      msg: `The player's names must be different`
    };
  }
  return { status: httpsSts.created };
};

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

const isThereAWinner = rounds => {
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
  return scores[0] === 3 ? 'player1' : scores[1] === 3 ? 'player2' : null;
};

gameRouter
  .route('/')
  .get((req, res) => {
    Game.find({}, (err, games) => {
      res.json(games);
    });
  })
  .post((req, res) => {
    const game = new Game(req.body);
    const { status, msg } = validForm(game);
    if (status === httpsSts.created) game.save();
    res.status(status).json(msg || game);
  });

gameRouter
  .route('/rounds/:gameId')
  .get((req, res) => {
    Game.findById(req.params.gameId, (err, game) => {
      res.json(game);
    });
  })
  .put((req, res) => {
    const roundWinner = getRoundWinner(req.body);
    Game.findById(req.params.gameId, (err, game) => {
      game.rounds.push({ ...req.body, winner: roundWinner });
      const finalWinner = isThereAWinner(game.rounds);
      if (finalWinner) game.winner = finalWinner;
      game.save();
      res.json(game);
    });
  });

module.exports = gameRouter;
