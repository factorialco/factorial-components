// @flow
import React from 'react'
import styles from './index.scss'
import Spinner from './Spinner'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
  inline?: boolean
}

export default class Loading extends React.Component {
  props: Props

  render () {
    const { inline } = this.props
    const className = cx('loading', { inline })

    return (
      <div className={className}>
        <Spinner />
      </div>
    )
  }
}
