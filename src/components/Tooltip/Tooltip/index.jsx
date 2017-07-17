// @flow
import { ReactChildren } from 'tcomb-react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import React from 'react'
import TetherComponent from '../../TetherComponent'

import styles from './index.scss'

import type { Attachment } from '../../TetherComponent/types'

type Props = {
  attachment: Attachment,
  children?: ReactChildren,
  className?: string, // Only use in case of emergency
  constraints?: Array<*>,
  darkenArrow?: boolean,
  offset?: string,
  open: boolean,
  size?: 'small' | 'normal',
  targetAttachment?: Attachment,
  toggle?: (value: boolean) => () => void,
  type: 'primary' | 'brand' | 'wrong' | 'negative' | 'popover'
}

const cx = classNames.bind(styles)

export default class Tooltip extends React.Component {
  props: Props
  mouseOver: boolean = false

  static defaultProps = {
    size: 'normal'
  }

  @autobind
  onMouseOver () {
    const { toggle } = this.props
    this.mouseOver = true

    if (toggle) toggle(true)()
  }

  @autobind
  onMouseLeave () {
    const { toggle } = this.props
    this.mouseOver = false

    if (toggle) {
      setTimeout(() => {
        toggle(this.mouseOver)()
      }, 70)
    }
  }

  renderTooltip () {
    const { darkenArrow, open, children, type, size } = this.props

    if (!open) return null
    if (!children) return null // flow

    return (
      <div
        className={cx(type, 'tooltip', type, size)}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={cx('arrow', { darken: darkenArrow })} />
        <div className={styles.content}>
          {children[1]}
        </div>
      </div>
    )
  }

  render () {
    const {
      children,
      constraints,
      attachment,
      targetAttachment,
      className,
      offset
    } = this.props

    if (!children) return null // flow
    if (React.Children.count(children) !== 2) {
      throw new Error('Popover expects two children elements')
    }

    return (
      <div
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        className={className}
      >
        <TetherComponent
          attachment={attachment}
          targetAttachment={targetAttachment}
          constraints={
            constraints || [
              {
                to: 'window',
                attachment: 'together',
                pin: false
              }
            ]
          }
          offset={offset}
        >
          {children && children[0]}
          {this.renderTooltip()}
        </TetherComponent>
      </div>
    )
  }
}
