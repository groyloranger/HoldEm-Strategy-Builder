// @flow
import React from 'react';

// import '../styles/Community.css';

type Props = {
  board: string[], // external optional
  pot?: number,
};

export default function Community(props: Props) {
  const boardToString = () => {
    const cards = props.board.slice();
    let str = '';
    for (let len = 5; len > 0; len -= 1) {
      const card = ((cards.length === len) ? cards.pop().concat(' ') : '_ ');
      str = card.concat(str);
    }
    return str.trim();
  };

  const currentRound = () => {
    const len = props.board.length;
    let round;
    switch (len) {
      case 0:
        round = 'Preflop';
        break;
      case 3:
        round = 'Flop';
        break;
      case 4:
        round = 'Turn';
        break;
      case 5:
        round = 'River';
        break;
      default:
        round = 'Drawing';
        break;
    }
    return round;
  };

  return (
    <div>
      <h3>{currentRound()}</h3>
      <h1>{boardToString()}</h1>
      <h3>Pot: {props.pot}</h3>
    </div>
  );
}

Community.defaultProps = {
  board: [],
  pot: 0,
};
