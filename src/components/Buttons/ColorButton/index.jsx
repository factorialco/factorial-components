// @flow
import React from 'react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  color?: string,
  label?: string,
  outline?: boolean,
  inverted: boolean,
  disabled?: boolean,
  backgroundColor: string,
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
    const { disabled, label, outline } = this.props

    return (
      <button
        className={cx('colorButton', { outline })}
        disabled={disabled}
        onClick={this.onClick}
        style={this.getStyle()}
      >
        {label}
      </button>
    )
  }
}
