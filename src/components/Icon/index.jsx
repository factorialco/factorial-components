// @flow
import classNames from 'classnames/bind'
import React from 'react'

import actionPath from './icons/action-sprite/svg/symbols.svg'
import customPath from './icons/custom-sprite/svg/symbols.svg'
import doctypePath from './icons/doctype-sprite/svg/symbols.svg'
import standardPath from './icons/standard-sprite/svg/symbols.svg'
import utilityPath from './icons/utility-sprite/svg/symbols.svg'

import styles from './index.scss'

import type { IconType } from './types'

const cx = classNames.bind(styles)

const iconPaths = {
  action: actionPath,
  custom: customPath,
  doctype: doctypePath,
  standard: standardPath,
  utility: utilityPath
}

export default class Icon extends React.Component {
  props: IconType;

  static defaultProps = {
    opacity: 1,
    set: 'standard',
    type: 'primary',
    size: 'medium'
  };

  render () {
    const { opacity, set, icon, size, type } = this.props

    if (!set || !icon) return null

    return (
      <svg
        aria-hidden='true'
        className={cx('base', set, type, size)}
        opacity={opacity}
      >
        <use xlinkHref={`${iconPaths[set]}#${icon}`} />
      </svg>
    )
  }
}
