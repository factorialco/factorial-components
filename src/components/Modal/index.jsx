// @flow
import _ from 'lodash'
import { ReactElement } from 'tcomb-react'
import $ from 'jquery'
import autobind from 'autobind-decorator'
import cn from 'classnames/bind'
import Form from 'components/Form'
import Icon from 'components/Icon'
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
          <Icon
            type={negative ? 'negative' : 'primary'}
            set='utility'
            icon='close'
            size='small'
          />
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
