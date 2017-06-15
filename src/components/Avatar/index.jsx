// @flow
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Size = 'small' | 'short' | 'medium' | 'grande' | 'big';
type Status = 'active' | 'idle' | 'off';

type Props = {
  size?: Size,
  status?: Status,
  team?: Object,
  url?: string,
  user?: Object
};

export default class Avatar extends React.Component {
  props: Props;

  renderStatus () {
    const { status } = this.props

    if (!status) return null

    return <span className={cx('statusIndicator', [status])} />
  }

  renderContent () {
    const { user, team, url } = this.props
    const avatarUrl = url || (user && user.has('avatar') && user.get('avatar'))

    if (avatarUrl) {
      return <img className={styles.img} src={avatarUrl} />
    }

    if (team) {
      return (
        <div className={styles.capitals}>
          {team.capitals()}
        </div>
      )
    }

    return (
      <svg aria-hidden='true' className={styles.illustration}>
        <use xlinkHref='#avatar' />
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
