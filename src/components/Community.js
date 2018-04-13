// @flow
import React from 'react';

// import '../styles/Community.css';

type Props = {
  board: string[], // external optional
}

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

  return (
    <div>
      {boardToString()}
    </div>
  );
}

Community.defaultProps = {
  board: [],
};
