// @flow
import _ from 'lodash'
import { ReactElement } from 'tcomb-react'
import autobind from 'autobind-decorator'
import cn from 'classnames/bind'
import Form from 'components/Form'
import Icon from 'components/Icon'
import Illustration from 'components/Illustration'
import React, { Component } from 'react'
import RoundButton from 'components/RoundButton'

import styles from '../index.scss'

import type { Modal as ModalType } from '../types'

type Props = ModalType

const cx = cn.bind(styles)

export default class Content extends Component {
  props: Props

  @autobind
  submit () {
    const { onSubmit } = this.props

    if (onSubmit) {
      return onSubmit()
    } else {
      return Promise.resolve()
    }
  }

  @autobind
  onClickBox (event: any) {
    event.stopPropagation()
  }

  @autobind
  onClickOverlay () {
    if (!this.props.closePortal) return
    this.props.closePortal()
  }

  @autobind
  onClose (event: any) {
    event.preventDefault()
    event.stopPropagation()
    if (!this.props.closePortal) return
    this.props.closePortal()
  }

  getClassNames () {
    const classes = [styles.modal]

    // Only used for the styleguide
    if (!_.isNil(this.props.fixed) && !this.props.fixed) {
      classes.push([styles.noFixed])
    }

    return classes.join(' ')
  }

    @autobind
  renderElement (element: ?ReactElement) {
    if (!element) return null

    return (
      <div className={styles.element}>
        {element}
      </div>
    )
  }

  renderHeaderContent () {
    const { headerContent } = this.props
    if (!headerContent) return null
    return headerContent()
  }

  renderIllustration () {
    const { color, illustration, type } = this.props

    if (!illustration) return null

    if (typeof illustration !== 'string') {
      return (
        <div
          className={styles.illustration}
          style={{ backgroundColor: illustration.backgroundColor }}
        >
          {illustration.illustration}
        </div>
      )
    }

    return (
      <div className={styles.illustration}>
        <Illustration color={color} type={type} name={illustration} />
      </div>
    )
  }

  renderCancel () {
    const { locked, negative } = this.props

    if (locked) return null

    return (
      <div className={styles.close}>
        <button type='button' onClick={this.onClose}>
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

  renderBack () {
    const { onBack } = this.props
    if (!onBack) return null
    return (
      <div className={styles.back}>
        <RoundButton
          icon='back'
          onClick={onBack}
          set='utility'
          type='negative'
        />
      </div>
    )
  }

  render () {
    const { big, negative, title, description, children } = this.props

    return (
      <div className={this.getClassNames()}>
        <div className={styles.overlay} onClick={this.onClickOverlay}>
          <div
            className={cx('box', { big, negative })}
            onClick={this.onClickBox}
          >
            <Form onSubmit={this.submit} className={styles.form}>
              {this.renderCancel()}
              {this.renderBack()}
              <div className={styles.header}>
                {this.renderIllustration()}
                <h2 className={styles.title}>
                  {title}
                </h2>
                <h3 className={styles.description}>
                  {description}
                </h3>
                {this.renderHeaderContent()}
              </div>
              {React.Children.map(children, this.renderElement)}
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
