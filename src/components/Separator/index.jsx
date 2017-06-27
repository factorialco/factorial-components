// @flow
import cn from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

type Types =
 | 'brand'
 | 'primary'

type Props = {
  color?: string,
  type: Types
}

const cx = cn.bind(styles)

const Separator = ({ color, type }: Props) => {
  return (
    <div
      style={color ? { borderColor: color } : {}}
      className={cx('separator', type)}
    />
  )
}

Separator.defaultProps = {
  type: 'brand'
}

export default Separator
