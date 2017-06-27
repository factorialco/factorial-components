import { storiesOf } from '@storybook/react'
import { Form } from 'factorial-form'
import React from 'react'

import Text from 'components/Inputs/Text'
import DayPicker from 'components/Inputs/DayPicker'

const form = new Form(
  { name: '', date: null },
  { name: 'string', date: 'date' }
)

storiesOf('Text', module).add('standard', () =>
  <div>
    <Text label='This is a label' field={form.get('name')} />
  </div>
)

storiesOf('DayPicker', module).add('standard', () =>
  <form>
    <DayPicker label='This is a label' field={form.get('date')} />
  </form>
)
