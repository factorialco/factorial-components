import { storiesOf } from '@storybook/react'
import React from 'react'

import RoundedBadge from 'components/RoundedBadge'

storiesOf('RoundedBadge', module).add('standard', () =>
  <RoundedBadge type='brand'>!</RoundedBadge>
)
