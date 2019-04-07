import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ScoreRound = ({ roundNumber, winner }) => (
  <>
    <div>
      <h3>Round {roundNumber}</h3>
    </div>
    <div>
      <h3>Winner</h3>
      <div>{winner}</div>
    </div>
  </>
);

const Score = ({ players, rounds }) => {
  const roundList = Object.keys(rounds);

  const scoreList = roundList.map(round => {
    const roundNumber = Number(round[round.length - 1]);
    const winner = rounds[round].winner;
    return <ScoreRound key={round} roundNumber={roundNumber} winner={players[winner] || winner} />;
  });

  return (
    <div>
      <h1>Score</h1>
      {scoreList}
    </div>
  );
};

Score.propTypes = {
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }),
  rounds: PropTypes.shape({}).isRequired
};
ScoreRound.propTypes = {
  roundNumber: PropTypes.number.isRequired,
  winner: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  players: state.players,
  rounds: state.rounds
});

export default connect(mapStateToProps)(Score);
