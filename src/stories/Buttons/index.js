import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from 'components/Buttons/Button'
import ColorButton from 'components/Buttons/ColorButton'
import LinkButton from 'components/Buttons/LinkButton'

storiesOf('Button', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('with text', () => <Button label='this is some text' />)
  .add('with some emoji', () => <Button label='😃 😃 😃' />)
  .add('outlined', () => <Button outline label='this is some text' />)

storiesOf('LinkButton', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('with text', () => <LinkButton label='this is some text' />)
  .add('with some react children', () =>
    <LinkButton label={<div>I am inside a div!</div>} />
  )
  .add('selected', () =>
    <LinkButton selected label='I am selectedadflaksjhfld!' />
  )

storiesOf('ColorButton', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('standard', () =>
    <ColorButton backgroundColor='#000' label='this is some text' />
  )
  .add('outlined', () =>
    <ColorButton outline backgroundColor='#000' label='this is some text' />
  )
  .add('inverted', () =>
    <ColorButton inverted backgroundColor='#000' label='this is some text' />
  )
