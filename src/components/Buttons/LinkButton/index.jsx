// @flow
import React from 'react'
import cn from 'classnames/bind'
import { ReactChildren } from 'tcomb-react'

import styles from './index.scss'

const cx = cn.bind(styles)

type Size = 'small'

type Props = {
  color?: string,
  size?: Size,
  children?: ReactChildren,
  onClick?: ?(event: SyntheticEvent) => any
}

export default function LinkButton ({ children, color, onClick, size }: Props) {
  return (
    <button
      style={color ? { color } : {}}
      className={cx('buttonLink', size)}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}

LinkButton.defaultProps = {
  size: 'medium'
}
