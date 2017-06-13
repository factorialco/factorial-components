import { storiesOf } from '@storybook/react'
import React from 'react'

import Separator from 'components/Separator'

storiesOf('Separator', module)
  .add('standard', () => <Separator />)
  .add('primary', () => <Separator type='primary' />)
