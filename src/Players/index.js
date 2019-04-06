import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addPlayers } from '../Actions/players.js';
import { setLevel } from '../Actions/config.js';

import styles from '../Styles/players.css';

class Players extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { player1: '', player2: '' };
  }

  validateForm(target) {
    const otherPlayer = target.id !== 'player1' ? 'player1' : 'player2';
    if (this.state[target.id] && target.value === this.state[otherPlayer]) {
      target.setCustomValidity('This name must be different from the other player');
    } else {
      target.setCustomValidity('');
    }
  }

  handleChange(event) {
    this.validateForm(event.target);
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submit(this.state);
  }

  render() {
    return (
      <div className={styles.playersContainer}>
        <div className={styles.playersCard}>
          <h1>Enter Player&apos;s Names</h1>
          <form onSubmit={this.handleSubmit}>
            <div className={styles.row}>
              <label className={styles.label2} htmlFor="player1">
                Player 1
              </label>
              <div className={styles.layout8}>
                <input
                  className={styles.inputPlayer}
                  required
                  id="player1"
                  onChange={this.handleChange}
                  value={this.state.player1}
                />
              </div>
            </div>
            <div className={styles.row}>
              <label className={styles.label2} htmlFor="player2">
                Player 2
              </label>
              <div className={styles.layout8}>
                <input
                  className={styles.inputPlayer}
                  required
                  id="player2"
                  onChange={this.handleChange}
                  value={this.state.player2}
                />
              </div>
            </div>
            <button className={`${styles.btn} ${styles.btnBlock}`} type="submit">
              Start
            </button>
          </form>
        </div>
      </div>
    );
  }
}
Players.propTypes = {
  players: PropTypes.shape({
    player1: PropTypes.string.isRequired,
    player2: PropTypes.string.isRequired
  }),
  submit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  submit: players => {
    dispatch(addPlayers(players));
    dispatch(setLevel(2));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
