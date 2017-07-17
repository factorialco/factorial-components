// @flow
import { ReactChildren } from 'tcomb-react'
import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  short?: boolean
}

export default function TableHeadCell ({ children, short }: Props) {
  return (
    <th className={cx('th', { short })}>
      {children}
    </th>
  )
}
