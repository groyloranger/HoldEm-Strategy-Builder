// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Community from '../components/Community';

storiesOf('Community', module)
  .add('preflop', () => (
    <Community />
  ))
  .add('flop', () => (
    <Community board={['As', '7h', '2d']} />
  ))
  .add('turn', () => (
    <Community board={['As', '7h', '2d', '3c']} />
  ))
  .add('river', () => (
    <Community board={['As', '7h', '2d', '3c', 'Jd']} />
  ));
