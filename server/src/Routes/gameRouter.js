const express = require('express');
const Game = require('../Models/gameModel');

const gameRouter = express.Router();

gameRouter
  .route('/')
  .get((req, res) => {
    Game.find({}, (err, games) => {
      res.json(games);
    });
  })
  .post((req, res) => {
    let game = new Game(req.body);
    game.save();
    res.status(201).send(game);
  });

gameRouter.route('/:gameId').get((req, res) => {
  Game.findById(req.params.gameId, (err, game) => {
    res.json(game);
  });
});

module.exports = gameRouter;
