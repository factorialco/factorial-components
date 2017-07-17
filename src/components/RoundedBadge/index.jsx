// @flow
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

import type { ReactChildren } from 'tcomb-react'

const cx = classNames.bind(styles)

type Props = {
  size?: 'small',
  type: | 'primary'
    | 'brand'
    | 'terciary'
    | 'correct'
    | 'wrong'
    | 'accent'
    | 'negative'
    | 'black',
  children?: ReactChildren
}

export default function RoundedBadge ({ children, type, size }: Props) {
  return (
    <div className={cx('roundedBadge', type, size)}>
      {children}
    </div>
  )
}
