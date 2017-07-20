import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import InlineSearch from 'components/InlineSearch'

storiesOf('InlineSearch', module)
  .addDecorator(story =>
    <div style={{ padding: 30, width: 200 }}>
      {story()}
    </div>
  )
  .add('standard', () =>
    <InlineSearch
      onSearch={action('onSearch')}
      placeholder='Search'
      search=''
    />
  )
