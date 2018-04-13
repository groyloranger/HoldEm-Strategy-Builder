// @flow
import React from 'react';

type Props = {
  stack: number
}

export default function Player(props: Props) {
  return <div>{props.stack}</div>;
}

Player.defaultProps = {};
