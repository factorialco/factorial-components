// @flow
import { ReactChildren } from 'tcomb-react'
import Chevron from 'components/Chevron'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './index.scss'

type Props = {
  label: ReactChildren | string,
  selected?: boolean,
  size?: string,
  style?: Object
}

const cx = cn.bind(styles)

export default class SidebarButton extends Component {
  props: Props

  static defaultProps = {
    size: 'small',
    style: {},
    selected: false
  }

  render () {
    const { label, selected, size, style } = this.props

    return (
      <button style={style} className={cx('root', size, { selected })}>
        <div className={styles.content}>
          {label}
        </div>
        {selected && <Chevron type='negative' direction='right' />}
      </button>
    )
  }
}
