import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Flash from 'components/Flash'

storiesOf('Flash', module)
  .add('correct', () =>
    <Flash
      close={action('close')}
      message={'This is a message'}
      type='correct'
    />
  )
  .add('wrong', () =>
    <Flash close={action('close')} message={'This is a message'} type='wrong' />
  )
