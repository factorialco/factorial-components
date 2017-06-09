import { storiesOf } from '@storybook/react'
import React from 'react'

import Chevron from 'components/Chevron'

storiesOf('Chevron', module)
  .add('standard', () => (
    <div>
      <Chevron type='brand' direction='up' />
      <Chevron type='brand' direction='right' />
      <Chevron type='brand' direction='down' />
      <Chevron type='brand' direction='left' />
    </div>
  ))
