// @flow
import { ReactChildren } from 'tcomb-react'
import cn from 'classnames/bind'
import React, { Component } from 'react'

import styles from './index.scss'

type Props = {
  children?: ReactChildren;
  selected?: boolean;
  style?: Object;
}

const cx = cn.bind(styles)

export default class LinkButton extends Component {
  props: Props

  render () {
    const { children, selected, style } = this.props

    return (
      <a style={style} className={cx('root', { selected })}>
        {children}
      </a>
    )
  }
}
