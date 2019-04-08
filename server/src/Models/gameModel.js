const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameModel = new Schema({
  level: Number,
  players: {
    player1: { type: String, required: true },
    player2: { type: String, required: true }
  },
  rounds: [
    {
      roundNumber: Number,
      player1: String,
      player2: String,
      winner: String
    }
  ],
  winner: String,
  winnerName: String
});

module.exports = mongoose.model('game', gameModel);
