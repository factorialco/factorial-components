// @flow
import { Link } from 'react-router'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './index.scss'

import type { ReactElement } from 'tcomb-react'
import type { ButtonType } from '../types'

const cx = classNames.bind(styles)

type Props = {
  collapsed?: boolean,
  disabled?: boolean,
  href?: string,
  label: string | ReactElement,
  onClick?: (event: any) => ?Promise<void>,
  outline?: boolean,
  size: 'small' | 'medium',
  style: Object,
  submit: boolean,
  to?: string,
  type?: ButtonType
}

type State = {
  clicked: boolean
};

export default class Button extends React.Component {
  mounted: boolean = false;
  state: State = {
    clicked: false
  };

  // TODO: Use disjoint types
  props: Props

  static defaultProps = {
    disabled: false,
    outline: false,
    size: 'medium',
    style: {},
    submit: false,
    type: 'brand'
  };

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  @autobind onClick (event: SyntheticEvent) {
    if (!this.props.onClick) return
    if (this.state.clicked) return

    const result = this.props.onClick(event)

    if (!result) return

    this.setState({ clicked: true }, () => {
      result.then(() => {
        if (this.mounted) this.setState({ clicked: false })
      })
    })
  }

  renderLabel () {
    const { label } = this.props

    return label
  }

  renderContent () {
    const { label } = this.props

    if (label) return this.renderLabel()

    return null
  }

  render () {
    const {
      collapsed,
      disabled,
      href,
      outline,
      size,
      style,
      submit,
      to,
      type
    } = this.props

    const className = cx(outline ? 'outline' : 'default', type, size, { collapsed })

    if (href) {
      return (
        <a className={className} href={href}>
          {this.renderContent()}
        </a>
      )
    } else if (to) {
      return (
        <Link className={className} to={to}>
          {this.renderContent()}
        </Link>
      )
    } else {
      return (
        <button
          className={className}
          disabled={disabled}
          onClick={this.onClick}
          style={style}
          type={submit ? 'submit' : 'button'}
        >
          {this.renderContent()}
        </button>
      )
    }
  }
}
