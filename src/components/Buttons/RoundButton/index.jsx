// @flow
import React from 'react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'

import Icon from '../../Icon'
import styles from './index.scss'
import type { ButtonType } from '../types'

const cx = classNames.bind(styles)

export default class RoundButton extends React.Component {
  props: {
    label?: string,
    icon: string,
    to?: string,
    set: string,
    type?: ButtonType,
    opened?: boolean,
    href?: string,
    disabled?: boolean,
    title?: string,
    onClick?: (event: SyntheticEvent) => mixed
  }

  static defaultProps = {
    type: 'brand',
    disabled: false
  }

  @autobind
  onClick (event: SyntheticEvent) {
    const { disabled, onClick } = this.props
    if (disabled) return event.preventDefault()
    if (event.defaultPrevented) return
    if (onClick) return onClick(event)
  }

  renderIcon () {
    const { set, icon, type, disabled } = this.props
    const iconType = disabled ? 'primary' : type
    return (
      <div className={styles.icon}>
        <Icon set={set} icon={icon} type={iconType} />
      </div>
    )
  }

  renderLabel () {
    const { label, opened } = this.props

    return (
      <div className={cx('label', { opened })}>
        {label}
      </div>
    )
  }

  renderContent () {
    const { icon, label } = this.props
    return (
      <div className={styles.flex}>
        {icon && this.renderIcon()}
        {label && this.renderLabel()}
      </div>
    )
  }

  render () {
    const { type, to, href, disabled, title } = this.props
    const className = cx('default', type)

    if (href) {
      return (
        <a className={className} title={title} href={href}>
          {this.renderContent()}
        </a>
      )
    } else if (to && process.env.__CLIENT__) {
      const { Link } = require('react-router')
      return (
        <Link className={className} title={title} to={to}>
          {this.renderContent()}
        </Link>
      )
    } else {
      return (
        <button
          className={className}
          title={title}
          onClick={this.onClick}
          disabled={disabled}
          type={'button'}
        >
          {this.renderContent()}
        </button>
      )
    }
  }
}
