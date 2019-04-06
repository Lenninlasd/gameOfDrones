import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addPlayers } from '../Actions/players.js';
import { setLevel } from '../Actions/config.js';

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
      <div>
        <h1>Enter Player&apos;s Names</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="player1">Player 1</label>
            <input required id="player1" onChange={this.handleChange} value={this.state.player1} />
          </div>
          <div>
            <label htmlFor="player2">Player 2</label>
            <input required id="player2" onChange={this.handleChange} value={this.state.player2} />
          </div>
          <button type="submit">Start</button>
        </form>
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
