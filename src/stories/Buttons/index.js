import { storiesOf } from '@storybook/react'
import React from 'react'

import Button from 'components/Buttons/Button'

storiesOf('Button', module)
  .addDecorator((story) => (
    <div style={{ width: 200 }}>
      {story()}
    </div>
  ))
  .add('with text', () => (
    <Button label='this is some text' />
  ))
  .add('with some emoji', () => (
    <Button label='😃 😃 😃' />
  ))
  .add('outlined', () => (
    <Button outline label='this is some text' />
  ))
