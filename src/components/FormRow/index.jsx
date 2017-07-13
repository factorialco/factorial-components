// @flow
import _ from 'lodash'
import { ReactChildren } from 'tcomb-react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  multi?: boolean,
  children?: ReactChildren
}

export default class FormRow extends React.Component {
  props: Props

  @autobind
  renderMultiRow (children: ReactChildren, i: number) {
    return (
      <div className={styles.subRow} key={i}>
        {children}
      </div>
    )
  }

  render () {
    if (!this.props.children) return null // Only for flow actually

    if (this.props.multi) {
      const className = cx('row', 'multi')

      return (
        <div className={className}>
          {_.compact(this.props.children || []).map(this.renderMultiRow)}
        </div>
      )
    }

    return (
      <div className={styles.row}>
        {this.props.children}
      </div>
    )
  }
}
