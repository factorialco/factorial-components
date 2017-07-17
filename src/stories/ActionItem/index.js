import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import ActionItem from 'components/ActionItem'

storiesOf('ActionItem', module)
  .add('onClick', () =>
    <ActionItem onClick={action('clicked')}>
      <div>This is an onClick</div>
    </ActionItem>
  )
  .add('href', () =>
    <ActionItem href='http://google.com'>
      <div>This is a regular link</div>
    </ActionItem>
  )
  .add('not clickable', () =>
    <ActionItem>
      <div>This is plain text</div>
    </ActionItem>
  )
  .add('highlighted', () =>
    <ActionItem highlighted>
      <div>This is plain text</div>
    </ActionItem>
  )
