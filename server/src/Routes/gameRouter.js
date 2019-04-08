const express = require('express');
const Game = require('../Models/gameModel');
const { getRoundWinner, isThereAWinner } = require('../gameHelpers');

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

gameRouter.route('/results').get((req, res) => {
  Game.aggregate(
    [
      {
        $group: {
          _id: '$winnerName',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ],
    (err, result) => {
      res.json(result);
    }
  );
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

      if (finalWinner) {
        game.winner = finalWinner;
        game.winnerName = game.players[finalWinner];
      }

      game.save();
      res.json(game);
    });
  });

module.exports = gameRouter;
