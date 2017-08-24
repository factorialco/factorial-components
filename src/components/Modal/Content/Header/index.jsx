// @flow
import React from 'react'
import styles from './index.scss'
import Icon from 'components/Icon'
import Illustration from 'components/Illustration'
import RoundButton from 'components/Buttons/RoundButton'
import cn from 'classnames/bind'

import type { Header as HeaderType } from '../../types'

const cx = cn.bind(styles)

export default class Header extends React.Component {
  props: HeaderType

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
    const { locked, negative, onClose } = this.props

    if (locked) return null

    return (
      <div className={styles.close}>
        <button type='button' onClick={onClose}>
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
    const {
      title,
      description,
      negative
    } = this.props

    return (
      <div className={cx('header', { negative })}>
        {this.renderCancel()}
        {this.renderBack()}
        {this.renderIllustration()}
        <h2 className={styles.title}>
          {title}
        </h2>
        <h3 className={styles.description}>
          {description}
        </h3>
      </div>
    )
  }
}
