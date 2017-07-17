import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Tooltip, TooltipPad, TooltipButton } from 'components/Tooltip'
import WithToggleState from 'components/WithToggleState'

storiesOf('Tooltip', module).add('standard', () => {
  return (
    <WithToggleState
      target={({ open, toggle }) =>
        <Tooltip
          attachment='bottom left'
          targetAttachment='top left'
          type='brand'
          open
          toggle={toggle}
          offset='0 -10px'
        >
          <div>hello world</div>
          <div>
            <TooltipPad>label</TooltipPad>
            <TooltipButton onClick={action('onclick')} disabled={false}>
              Tooltip button
            </TooltipButton>
          </div>
        </Tooltip>}
    />
  )
})
