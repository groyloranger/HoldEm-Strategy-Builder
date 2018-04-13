// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import Community from '../components/Community';

storiesOf('Community', module)
  .add('default', () => (
    <Community />
  ));
