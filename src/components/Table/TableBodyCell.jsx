// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  centered?: boolean,
  short?: boolean
}

export default function TableBodyCell ({ children, centered, short }: Props) {
  return (
    <td className={cx('td', { short, centered })}>
      {children}
    </td>
  )
}
