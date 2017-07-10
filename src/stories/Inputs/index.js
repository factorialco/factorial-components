import { storiesOf } from '@storybook/react'
import { Form } from 'factorial-form'
import React from 'react'

import Text from 'components/Inputs/Text'
import Country from 'components/Inputs/Country'
import DayPicker from 'components/Inputs/DayPicker'

const form = new Form(
  { name: '', date: null, country: 'es' },
  { name: 'string', date: 'date', country: 'string' }
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

storiesOf('Country', module).add('standard', () =>
  <form>
    <Country label='Country' locale='es' field={form.get('country')} />
  </form>
)
