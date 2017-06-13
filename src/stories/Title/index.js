import { storiesOf } from '@storybook/react'
import React from 'react'

import Title from 'components/Title'

storiesOf('Title', module)
  .add('standard', () =>
    <Title label='This is a title' />
  )
  .add('with separator', () =>
    <Title label='This is a title' separator />
  )
  .add('with primary separator', () =>
    <Title label='This is a title' separator type='primary' />
  )
  .add('centered', () =>
    <Title label='This is a title' centered separator type='primary' />
  )
