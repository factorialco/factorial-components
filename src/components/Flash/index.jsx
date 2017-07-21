// @flow
import cn from 'classnames/bind'
import Icon from 'components/Icon'
import React from 'react'
import renderIf from 'lib/renderIf'

import styles from './index.scss'

type FlashType = {
  close?: () => void,
  message: string,
  type: 'brand' | 'terciary' | 'correct' | 'wrong' | 'accent'
}

const cx = cn.bind(styles)

export default class Flash extends React.Component {
  props: FlashType

  render () {
    const { close, type, message } = this.props

    return (
      <div className={cx('flash', type)}>
        <div className={styles.icon}>
          <Icon
            icon={type === 'correct' ? 'check' : 'close'}
            set='utility'
            size='smaller'
            type={type}
          />
        </div>
        <div className={styles.message}>
          {message}
        </div>
        {renderIf(Boolean(close))(
          <button className={styles.close} onClick={close} type='button'>
            <Icon
              icon='close'
              opacity={0.5}
              set='utility'
              size='smaller'
              type='black'
            />
          </button>
        )}
      </div>
    )
  }
}
