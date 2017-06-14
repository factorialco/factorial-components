// @flow
import { ReactChildren } from 'tcomb-react'
import React, { Component } from 'react'
import cn from 'classnames/bind'
import styles from './index.scss'

const cx = cn.bind(styles)

type DIRECTIONS = 'top' | 'bottom' | 'left' | 'right';
type TYPES = 'correct' | 'wrong' | 'brand' | 'accent';

type Props = {
  arrow?: DIRECTIONS,
  children?: ReactChildren,
  type?: TYPES
};

export default class InlineTooltip extends Component {
  props: Props;

  render () {
    const { arrow, children, type } = this.props

    return (
      <div className={cx(styles.root, arrow, type)}>
        {children}
      </div>
    )
  }
}
