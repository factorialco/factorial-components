// @flow
import configuration from 'shared'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './index.scss'

import type { IconType } from './types'

const cx = classNames.bind(styles)

export default class Icon extends React.Component {
  props: IconType

  static defaultProps = {
    opacity: 1,
    set: 'standard',
    type: 'primary',
    size: 'medium'
  }

  render () {
    const { opacity, icon, set, size, type } = this.props

    if (!icon || !set) return null

    return (
      <svg
        aria-hidden='true'
        className={cx('base', set, type, size)}
        opacity={opacity}
      >
        <use xlinkHref={`${configuration.iconsPath[set]}#${icon}`} />
      </svg>
    )
  }
}
