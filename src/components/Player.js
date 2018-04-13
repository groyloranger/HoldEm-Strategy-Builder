// @flow
import React from 'react';

type Props = {
  bet: number,
  stack: number,
}

export default function Player(props: Props) {
  return (
    <ul>
      <li>Stack: {props.stack}</li>
      <li>Bet: {props.bet}</li>
    </ul>
  );
}

Player.defaultProps = {};
