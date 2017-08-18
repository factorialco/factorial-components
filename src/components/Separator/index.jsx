// @flow
import cn from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

type Types = 'brand' | 'primary' | 'negative' | 'wrong'
type Sizes = 'small' | 'medium'

type Props = {
  color?: string,
  size?: Sizes,
  type: Types
}

const cx = cn.bind(styles)

const Separator = ({ color, size, type }: Props) => {
  return (
    <div
      style={color ? { borderColor: color } : {}}
      className={cx('separator', size, type)}
    />
  )
}

Separator.defaultProps = {
  size: 'medium',
  type: 'brand'
}

export default Separator
