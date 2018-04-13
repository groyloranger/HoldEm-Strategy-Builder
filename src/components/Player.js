// @flow
import React from 'react';

import '../styles/Player.css';

type Props = {
  active?: boolean,
  bet: number,
  folded?: boolean,
  name?: string,
  stack: number,
}

export default function Player(props: Props) {
  const containerStyle = () => {
    let style = 'container';
    if (props.folded) {
      style = style.concat(' folded');
    } else if (props.active) {
      style = style.concat(' active');
    }
    return style;
  };

  return (
    <div className={containerStyle()}>
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
  active: false,
  folded: false,
  name: undefined,
};
