// @flow
import { ReactChildren } from 'tcomb-react'
import React, { Component } from 'react'
import styles from './index.scss'

type Props = {
  children?: ReactChildren
}

export default class ScrollableItem extends Component {
  props: Props

  render () {
    const { children } = this.props

    return (
      <div className={styles.scrollableItem}>
        {children}
      </div>
    )
  }
}
