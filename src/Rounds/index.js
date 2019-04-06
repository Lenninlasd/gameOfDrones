import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRoundMove } from '../Actions/rounds.js';

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
    this.props.finishRound(this.state.currentRound, this.state.moves);
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
      <div>
        <h1>Round {currentRound}</h1>
        <h2>{players[currentPlayer]}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Choose your move</h3>
            <input
              checked={moves[currentPlayer] === 'paper'}
              type="radio"
              name="move"
              value="paper"
              required
              onChange={this.handleChange}
            />
            Paper
            <br />
            <input
              checked={moves[currentPlayer] === 'rock'}
              type="radio"
              name="move"
              value="rock"
              onChange={this.handleChange}
            />
            Rock <br />
            <input
              checked={moves[currentPlayer] === 'scissors'}
              type="radio"
              name="move"
              value="scissors"
              onChange={this.handleChange}
            />
            Scissors
          </div>
          <button type="submit">Ok</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  players: state.players
});

const mapDispatchToProps = dispatch => ({
  finishRound: (roundNumber, moves) => dispatch(setRoundMove(roundNumber, moves))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Round);
