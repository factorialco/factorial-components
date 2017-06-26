import { storiesOf } from '@storybook/react'
import React from 'react'

import Steps from 'components/Steps'

storiesOf('Steps', module)
  .add('1', () => <Steps color='#000' step={1} steps={4} />)
  .add('2', () => <Steps color='#000' step={2} steps={4} />)
  .add('3', () => <Steps color='#000' step={3} steps={4} />)
  .add('4', () => <Steps color='#000' step={4} steps={4} />)
