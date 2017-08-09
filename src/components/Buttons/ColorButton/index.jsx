// @flow
import React from 'react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  backgroundColor: string,
  color?: string,
  compact?: boolean,
  disabled?: boolean,
  inverted: boolean,
  label?: string,
  onClick?: (event: SyntheticEvent) => mixed,
  outline?: boolean,
  to?: string
}

export default class ColorButton extends React.Component {
  props: Props

  static defaultProps = {
    type: 'brand',
    color: 'white'
  }

  @autobind
  onClick (event: SyntheticEvent) {
    const { onClick } = this.props
    if (event.defaultPrevented) return
    if (onClick) return onClick(event)
  }

  getStyle () {
    const { backgroundColor } = this.props

    const common = {
      borderColor: backgroundColor
    }

    if (this.props.inverted) {
      return {
        ...common,
        color: backgroundColor,
        borderColor: 'white',
        backgroundColor: 'white'
      }
    }

    if (this.props.outline) {
      return {
        ...common,
        color: backgroundColor
      }
    }

    return {
      ...common,
      color: this.props.color,
      backgroundColor: backgroundColor
    }
  }

  render () {
    const { to, disabled, label, outline, compact } = this.props

    if (to && process.env.__CLIENT__) {
      const { Link } = require('react-router')
      return (
        <Link className={styles.colorButton} to={to} style={this.getStyle()}>
          {label}
        </Link>
      )
    }

    return (
      <button
        className={cx('colorButton', { outline, compact })}
        disabled={disabled}
        onClick={this.onClick}
        style={this.getStyle()}
      >
        {label}
      </button>
    )
  }
}
