// @flow
import _ from 'lodash'
import { ReactElement } from 'tcomb-react'
import $ from 'jquery'
import autobind from 'autobind-decorator'
import cn from 'classnames/bind'
import Form from 'components/Form'
import Portal from 'react-portal'
import React from 'react'

import styles from './index.scss'

import type { Modal as ModalType } from './types'

const cx = cn.bind(styles)

export default class Modal extends React.Component {
  props: ModalType;

  static defaultProps = {
    type: 'brand'
  };

  componentDidMount () {
    $('html').css({
      'overflow-y': 'hidden',
      'padding-right': '15px'
    })
  }

  componentWillUnmount () {
    $('html').css({
      'overflow-y': 'scroll',
      'padding-right': '0px'
    })
  }

  @autobind cancel () {
    this.props.onClose()
  }

  @autobind submit () {
    const { onSubmit } = this.props

    if (onSubmit) {
      return onSubmit()
    } else {
      return Promise.resolve()
    }
  }

  @autobind onCancel (event: any) {
    event.preventDefault()
    this.cancel()
  }

  @autobind onClickBox (event: any) {
    event.stopPropagation()
  }

  @autobind onClickOverlay () {
    this.cancel()
  }

  getClassNames () {
    const classes = [styles.modal]

    // Only used for the styleguide
    if (!_.isNil(this.props.fixed) && !this.props.fixed) {
      classes.push([styles.noFixed])
    }

    return classes.join(' ')
  }

  @autobind renderElement (element: ?ReactElement) {
    if (!element) return null

    return (
      <div className={styles.element}>
        {element}
      </div>
    )
  }

  renderCancel () {
    const { locked, negative } = this.props

    if (locked) return null

    return (
      <div className={styles.close}>
        <button type='button' onClick={this.onCancel}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
            <path fill={negative ? 'white' : '#A8AFB3'} d='M31 25.4l13-13.1c.6-.6.6-1.5 0-2.1l-2-2.1c-.6-.6-1.5-.6-2.1 0L26.8 21.2c-.4.4-1 .4-1.4 0L12.3 8c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l13.1 13.1c.4.4.4 1 0 1.4L8 39.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L25.3 31c.4-.4 1-.4 1.4 0l13.1 13.1c.6.6 1.5.6 2.1 0L44 42c.6-.6.6-1.5 0-2.1L31 26.8c-.4-.4-.4-1 0-1.4z' />
          </svg>
        </button>
      </div>
    )
  }

  renderContent () {
    const { title, description, big, negative, children } = this.props

    return (
      <div className={this.getClassNames()}>
        <div className={styles.overlay} onClick={this.onClickOverlay}>
          <div
            className={cx('box', { big, negative })}
            onClick={this.onClickBox}
          >
            <Form onSubmit={this.submit} className={styles.form}>
              {this.renderCancel()}
              <div className={styles.header}>
                <h2 className={styles.title}>
                  {title}
                </h2>
                <h3 className={styles.description}>
                  {description}
                </h3>
              </div>
              {React.Children.map(children, this.renderElement)}
            </Form>
          </div>
        </div>
      </div>
    )
  }

  render () {
    const { locked } = this.props

    if (locked) {
      return (
        <Portal isOpened>
          {this.renderContent()}
        </Portal>
      )
    }

    return (
      <Portal closeOnEsc isOpened onClose={this.cancel}>
        {this.renderContent()}
      </Portal>
    )
  }
}
