const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameModel = new Schema({
  level: Number,
  players: {
    player1: String,
    player2: String
  },
  rounds: [
    {
      roundNumber: Number,
      player1: String,
      player2: String,
      winner: String
    }
  ],
  winner: String
});

module.exports = mongoose.model('game', gameModel);