// @flow
import React from 'react';

import '../styles/Player.css';

type Props = {
  bet: number,
  name?: string,
  stack: number,
}

export default function Player(props: Props) {
  return (
    <div className="container">
      {props.name &&
        <h3 className="name">{props.name}</h3>
      }
      <ul>
        <li>Stack: {props.stack}</li>
        <li>Bet: {props.bet}</li>
      </ul>
    </div>
  );
}

Player.defaultProps = {
  name: undefined,
};
