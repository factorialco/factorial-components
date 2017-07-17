// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren
}

export default function TooltipPad ({ children }: Props) {
  return (
    <div className={cx('pad')}>
      {children}
    </div>
  )
}
