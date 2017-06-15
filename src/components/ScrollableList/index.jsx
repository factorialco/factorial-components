// @flow
import { ReactChildren } from 'tcomb-react'
import React, { Component } from 'react'
import styles from './index.scss'

type Props = {
  children?: ReactChildren
};

export default class ScrollableList extends Component {
  props: Props;

  render () {
    const { children } = this.props

    return (
      <div className={styles.scrollableList}>
        {children}
      </div>
    )
  }
}
