import { observer } from 'mobx-react'
import { storiesOf } from '@storybook/react'
import { Form } from 'factorial-form'
import React from 'react'

import Text from 'components/Inputs/Text'
import DayPicker from 'components/Inputs/DayPicker'

const form = new Form(
  { name: '', date: null },
  { name: 'string', date: 'date' }
)

const ObserverText = observer(Text)
const ObserverDayPicker = observer(DayPicker)

storiesOf('Text', module).add('standard', () =>
  <div>
    <ObserverText label='This is a label' field={form.get('name')} />
  </div>
)

storiesOf('DayPicker', module).add('standard', () =>
  <form>
    <ObserverDayPicker label='This is a label' field={form.get('date')} />
  </form>
)
