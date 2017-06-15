import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import employees from 'stores/collections/employees'
import users from 'stores/collections/users'
import React from 'react'

import EmployeeSelector from 'components/EmployeeSelector'

users.add([
  {
    id: 1,
    first_name: 'foo',
    last_name: 'bar'
  },
  {
    id: 2,
    first_name: 'hello',
    last_name: 'world'
  }
])

employees.add([
  {
    id: 1,
    access_id: 1
  },
  {
    id: 2,
    access_id: 2
  }
])

storiesOf('EmployeeSelector', module).add('standard', () =>
  <div style={{ width: 400 }}>
    <EmployeeSelector
      employees={employees.models}
      onSelectEmployee={action('employee selected!')}
      selectedEmployeeIds={[]}
    />
  </div>
)
