import { storiesOf } from '@storybook/react'
import { Form } from 'factorial-form'
import React from 'react'

import Text from 'components/Inputs/Text'

const form = new Form({ name: '' }, { name: 'string' })

storiesOf('Text', module).add('standard', () =>
  <div>
    <Text label='This is a label' fieldModel={form.get('name')} />
  </div>
)
