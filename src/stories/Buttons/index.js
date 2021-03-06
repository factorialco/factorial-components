import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from 'components/Buttons/Button'
import ColorButton from 'components/Buttons/ColorButton'
import LinkButton from 'components/Buttons/LinkButton'
import SidebarButton from 'components/Buttons/SidebarButton'

storiesOf('Button', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('with text', () => <Button label='this is some text' />)
  .add('with some emoji', () => <Button label='😃 😃 😃' />)
  .add('outlined', () => <Button outline label='this is some text' />)
  .add('darker', () => <Button type='darker' label='Darker Button' />)
  .add('darker with outline', () =>
    <Button type='darker' outline label='Darker Outline  Button' />
  )

storiesOf('SidebarButton', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('with text', () => <SidebarButton label='this is some text' />)
  .add('with some react children', () =>
    <SidebarButton label={<div>I am inside a div!</div>} />
  )
  .add('selected', () =>
    <SidebarButton
      selected
      label='I am gggggalkdjfhasdlkjfhaslkjfhlskajdhflkjh!'
    />
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
  .add('compact', () =>
    <ColorButton compact backgroundColor='#000' label='this is some text' />
  )
  .add('outlined', () =>
    <ColorButton outline backgroundColor='#000' label='this is some text' />
  )
  .add('inverted', () =>
    <ColorButton inverted backgroundColor='#000' label='this is some text' />
  )

storiesOf('LinkButton', module)
  .addDecorator(story =>
    <div style={{ width: 200 }}>
      {story()}
    </div>
  )
  .add('standard', () => <LinkButton>this is some text</LinkButton>)
  .add('custom color', () =>
    <LinkButton color='blue'>this is some text</LinkButton>
  )
