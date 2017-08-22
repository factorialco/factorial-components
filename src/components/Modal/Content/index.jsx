// @flow
import _ from 'lodash'
import { ReactElement } from 'tcomb-react'
import autobind from 'autobind-decorator'
import cn from 'classnames/bind'
import Form from 'components/Form'
import React, { Component } from 'react'
import Header from './Header'

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
      return onSubmit(this.props.closePortal)
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

  @autobind
  renderHeader () {
    const {
      title,
      description,
      illustration,
      color,
      negative,
      type,
      onBack,
      header
    } = this.props

    if (header) return header()

    return (
      <Header
        title={title}
        description={description}
        color={color}
        type={type}
        illustration={illustration}
        negative={negative}
        onBack={onBack}
        onClose={this.onClose}
      />
    )
  }

  render () {
    const { big, negative, children } = this.props

    return (
      <div className={this.getClassNames()}>
        <div className={styles.overlay} onClick={this.onClickOverlay}>
          <div
            className={cx('box', { big, negative })}
            onClick={this.onClickBox}
          >
            <Form onSubmit={this.submit} className={styles.form}>
              {this.renderHeader()}

              {React.Children.map(children, this.renderElement)}
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
