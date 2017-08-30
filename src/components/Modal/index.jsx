// @flow
import $ from 'jquery'
import Content from './Content'
import Portal from 'react-portal'
import React from 'react'
import autobind from 'autobind-decorator'

import type { Modal as ModalType } from './types'

export default class Modal extends React.Component {
  props: ModalType

  static defaultProps = {
    type: 'brand'
  }

  componentDidMount () {
    $('html').css({
      'overflow-y': 'hidden',
      'padding-right': '15px'
    })
  }

  componentWillUnmount () {
    this.restoreScroll()
  }

  @autobind
  beforeClose (node: any, removeFromDOM: Function) {
    this.restoreScroll()
    removeFromDOM()
  }

  @autobind
  restoreScroll () {
    $('html').css({
      'overflow-y': 'scroll',
      'padding-right': '0px'
    })
  }

  renderContent () {
    return (
      <Content {...this.props}>
        {this.props.children}
      </Content>
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
      <Portal closeOnEsc isOpened beforeClose={this.beforeClose} onClose={this.props.onClose}>
        {this.renderContent()}
      </Portal>
    )
  }
}
