// @flow
import cn from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

type Types =
 | 'brand'
 | 'primary'

type Props = {
  type: Types
}

const cx = cn.bind(styles)

const Separator = ({ type }: Props) => {
  return <div className={cx('separator', type)} />
}

Separator.defaultProps = {
  type: 'brand'
}

export default Separator
