import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import {
  Table,
  TableBody,
  TableBodyCell,
  TableHead,
  TableHeadCell,
  TableRow
} from 'components/Table'

storiesOf('Table', module).add('standard', () => {
  return (
    <Table expanded>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            employees
          </TableHeadCell>
          <TableHeadCell short />
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow onClick={action('clicked row!')}>
          <TableBodyCell>
            Body cell!
          </TableBodyCell>
          <TableBodyCell short>
            Body cell 2!
          </TableBodyCell>
        </TableRow>
      </TableBody>
    </Table>
  )
})
