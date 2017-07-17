// @flow
import classNames from 'classnames/bind'
import configuration from 'shared'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Size = 'small' | 'short' | 'medium' | 'grande' | 'big'
type Status = 'active' | 'idle' | 'off'

type Props = {
  letters?: string,
  size?: Size,
  status?: Status,
  url?: string
}

export default class Avatar extends React.Component {
  props: Props

  renderStatus () {
    const { status } = this.props
    if (!status) return null
    return <span className={cx('statusIndicator', [status])} />
  }

  renderContent () {
    const { letters, url } = this.props

    if (url) {
      return <img className={styles.img} src={url} />
    }

    if (letters) {
      return (
        <div className={styles.capitals}>
          {letters}
        </div>
      )
    }

    return (
      <svg aria-hidden='true' className={styles.illustration}>
        <use xlinkHref={`${configuration.iconsPath.illustrations}#avatar`} />
      </svg>
    )
  }

  render () {
    const { size } = this.props
    const className = styles[size || 'medium']

    return (
      <div className={className}>
        {this.renderContent()}
        {this.renderStatus()}
      </div>
    )
  }
}
