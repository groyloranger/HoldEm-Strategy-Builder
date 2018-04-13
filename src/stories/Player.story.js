// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Player from '../components/Player';

storiesOf('Player', module)
  .add('default', () => (
    <Player stack={100} bet={0} />
  ))
  .add('with name', () => (
    <Player stack={100} bet={0} name="Button" />
  ));
