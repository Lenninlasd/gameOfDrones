import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../Styles/players.css';

const Results = ({ players, winner, resetGame }) => (
  <div className={styles.container}>
    <div className={styles.card}>
      <div className={styles.textCenter}>
        <h1>We have a WINNER!</h1>
        <h1> {players[winner]} is the new EMPEROR!</h1>
      </div>
      <button onClick={resetGame} className={`${styles.btn} ${styles.btnBlock}`}>
        Play Again
      </button>
    </div>
  </div>
);

Results.propTypes = {
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }),
  winner: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  winner: state.winner,
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  resetGame: () => dispatch({ type: 'RESET_APP' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
