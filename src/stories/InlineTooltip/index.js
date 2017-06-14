import { storiesOf } from '@storybook/react'
import React from 'react'

import InlineTooltip from 'components/InlineTooltip'

storiesOf('InlineTooltip', module)
  .addDecorator(story =>
    <div style={{ padding: 30, width: 200 }}>
      {story()}
    </div>
  )
  .add('standard', () =>
    <InlineTooltip>
      This is an example
    </InlineTooltip>
  )
  .add('with bottom arrow', () =>
    <InlineTooltip arrow='bottom'>
      This is an example
    </InlineTooltip>
  )
  .add('with top arrow', () =>
    <InlineTooltip arrow='top'>
      This is an example
    </InlineTooltip>
  )
  .add('with right arrow', () =>
    <InlineTooltip arrow='right'>
      This is an example
    </InlineTooltip>
  )
  .add('with left arrow', () =>
    <InlineTooltip arrow='left'>
      This is an example
    </InlineTooltip>
  )
  .add('with accent', () =>
    <InlineTooltip type='correct'>
      This is an example
    </InlineTooltip>
  )
