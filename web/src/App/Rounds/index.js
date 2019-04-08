import React, { Component } from 'react';
import { connect } from 'react-redux';
import { finishRound } from '../../Actions/rounds.js';
import PropTypes from 'prop-types';

import styles from '../Styles/players.css';

class Round extends Component {
  constructor(props) {
    super(props);
    this.defaultRound = {
      currentPlayer: 'player1',
      currentRound: 1,
      moves: {}
    };
    this.state = this.defaultRound;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.checked = true;
    const value = event.target.value;

    this.setState(prevState => ({
      moves: {
        ...prevState.moves,
        [prevState.currentPlayer]: value
      }
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.moves.player2) {
      this.setState({ currentPlayer: 'player2' });
      return;
    }
    this.props.finishRound(this.props.id, this.state.currentRound, this.state.moves);
    this.clearRound();
  }

  clearRound() {
    this.setState(prevState => ({
      ...this.defaultRound,
      currentRound: prevState.currentRound + 1
    }));
  }

  render() {
    const { players } = this.props;
    const { moves, currentRound, currentPlayer } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Round {currentRound}</h1>
          <h2>{players[currentPlayer]}</h2>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.movesButtons}>
              <h3>Choose your move</h3>
              <div className={styles.ccSelector2}>
                <input
                  id="paper"
                  checked={moves[currentPlayer] === 'paper'}
                  type="radio"
                  name="move"
                  value="paper"
                  required
                  onChange={this.handleChange}
                />
                <label className={`${styles.movement} ${styles.paper}`} htmlFor="paper" />
                <input
                  id="rock"
                  checked={moves[currentPlayer] === 'rock'}
                  type="radio"
                  name="move"
                  value="rock"
                  onChange={this.handleChange}
                />
                <label className={`${styles.movement} ${styles.rock}`} htmlFor="rock" />
                <input
                  id="scissors"
                  checked={moves[currentPlayer] === 'scissors'}
                  type="radio"
                  name="move"
                  value="scissors"
                  onChange={this.handleChange}
                />
                <label className={`${styles.movement} ${styles.scissors}`} htmlFor="scissors" />
              </div>
            </div>
            <button className={`${styles.btn} ${styles.btnBlock}`} type="submit">
              Ok
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Round.propTypes = {
  id: PropTypes.string.isRequired,
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }),
  finishRound: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  id: state.id,
  players: state.players
});

export default connect(
  mapStateToProps,
  { finishRound }
)(Round);
