// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren
};

export default function Pad ({ children }: Props) {
  const empty = !React.Children.count(children)
  return (
    <div className={cx('pad', { empty })}>
      {children}
    </div>
  )
}
