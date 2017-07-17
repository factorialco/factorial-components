// @flow
import { ReactChildren } from 'tcomb-react'
import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  onClick?: ?(event: SyntheticEvent) => any
}

export default function TableRow ({ onClick, children }: Props) {
  let attributes = {
    className: cx('tr', { clickable: !!onClick })
  }

  if (onClick) {
    attributes = {
      ...attributes,
      onClick: onClick
    }
  }

  return (
    <tr {...attributes}>
      {children}
    </tr>
  )
}
