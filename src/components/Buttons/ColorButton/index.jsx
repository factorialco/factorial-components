// @flow
import React from 'react'
import { Link } from 'react-router'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  backgroundColor: string,
  color?: string,
  label?: string,
  to?: string,
  outline?: boolean,
  inverted: boolean,
  onClick?: (event: SyntheticEvent) => mixed
};

export default class ColorButton extends React.Component {
  props: Props;

  static defaultProps = {
    type: 'brand',
    color: 'white'
  };

  @autobind onClick (event: SyntheticEvent) {
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
    const { label, to, outline } = this.props

    if (to) {
      return (
        <Link className={styles.colorButton} to={to} style={this.getStyle()}>
          {label}
        </Link>
      )
    }

    return (
      <button
        className={cx('colorButton', { outline })}
        onClick={this.onClick}
        style={this.getStyle()}
      >
        {label}
      </button>
    )
  }
}
