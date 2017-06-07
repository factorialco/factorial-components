// @flow
import { Link } from 'react-router'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './index.scss'

import type { ReactElement } from 'tcomb-react'
import type { ButtonType } from '../types'

const cx = classNames.bind(styles)

type State = {
  clicked: boolean
};

export default class Button extends React.Component {
  mounted: boolean = false;
  state: State = {
    clicked: false
  };

  // TODO: Use disjoint types
  props: {
    label: string | ReactElement,
    collapsed?: boolean,
    type?: ButtonType,
    outline?: boolean,
    href?: string,
    to?: string,
    submit: boolean,
    disabled?: boolean,
    onClick?: (event: any) => ?Promise<void>
  };

  static defaultProps = {
    type: 'brand',
    submit: false,
    outline: false,
    disabled: false
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
      type,
      href,
      to,
      submit,
      outline,
      disabled,
      collapsed
    } = this.props

    const className = cx(outline ? 'outline' : 'default', type, { collapsed })

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
          onClick={this.onClick}
          disabled={disabled}
          type={submit ? 'submit' : 'button'}
        >
          {this.renderContent()}
        </button>
      )
    }
  }
}
