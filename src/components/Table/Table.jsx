// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import React, { Component } from 'react'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  expanded?: Boolean
}

export default class Table extends Component {
  props: Props

  render () {
    const { expanded, children } = this.props

    return (
      <div className={styles.tableContainer}>
        <table className={cx('table', { expanded })}>
          {children}
        </table>
      </div>
    )
  }
}
