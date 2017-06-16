import { storiesOf } from '@storybook/react'
import React from 'react'

import ReadOnlyField from 'components/ReadOnlyField'

storiesOf('ReadOnlyField', module).add('standard', () =>
  <ReadOnlyField label='This is a label' value='hello world' />
)
