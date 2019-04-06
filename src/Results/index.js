import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Results = ({ players, winner }) => (
  <div>
    <h1>We have a WINNER!</h1>
    <h1> {players[winner]} is the new EMPEROR!</h1>
  </div>
);
Results.propTypes = {
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }),
  winner: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  winner: state.winner,
  players: state.players
});

export default connect(mapStateToProps)(Results);
