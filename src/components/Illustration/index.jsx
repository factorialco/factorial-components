// @flow
import configuration from 'shared'
import cn from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

type Sizes = 'short' | 'small' | 'medium' | 'grande' | 'big';

export type Colors =
  | 'primary'
  | 'secondary'
  | 'terciary'
  | 'correct'
  | 'wrong'
  | 'accent'
  | 'negative'
  | 'brand';

type Props = {
  name: string,
  color?: string,
  size?: Sizes,
  fill?: boolean,
  type?: Colors
};

const cx = cn.bind(styles)

const Illustration = ({ fill, type, size, name, color }: Props) => {
  let style = {}
  if (color) style = fill ? { fill: color } : { stroke: color }

  return (
    <svg
      style={style}
      aria-hidden='true'
      className={cx('illustration', type, size, { fill })}
    >
      <use xlinkHref={`${configuration.iconsPath.illustrations}#${name}`} />
    </svg>
  )
}

Illustration.defaultProps = {
  size: 'medium',
  fill: false,
  type: 'brand'
}

export default Illustration
