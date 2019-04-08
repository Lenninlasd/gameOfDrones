const getRoundWinner = ({ player1, player2 }) => {
  if (player1 === player2) return 'draw';

  if (player1 === 'paper' && player2 === 'rock') {
    return 'player1';
  } else if (player1 === 'rock' && player2 === 'scissors') {
    return 'player1';
  } else if (player1 === 'scissors' && player2 === 'paper') {
    return 'player1';
  } else {
    return 'player2';
  }
};

const isThereAWinner = rounds => {
  const scores = Object.values(rounds).reduce(
    (acc, round) => {
      if (round.winner === 'player1') {
        acc[0]++;
      } else if (round.winner === 'player2') {
        acc[1]++;
      }
      return acc;
    },
    [0, 0]
  );
  return scores[0] === 3 ? 'player1' : scores[1] === 3 ? 'player2' : null;
};

module.exports = { getRoundWinner, isThereAWinner };
