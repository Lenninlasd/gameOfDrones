import React from 'react';
import { connect } from 'react-redux';

const Results = ({ players, winner }) => (
  <div>
    <h1>We have a WINNER!</h1>
    <h1> {players[winner]} is the new EMPEROR!</h1>
  </div>
);

const mapStateToProps = state => ({
  winner: state.winner,
  players: state.players
});

export default connect(mapStateToProps)(Results);
