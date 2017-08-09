// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import Icon from '../Icon'
import React from 'react'
import renderIf from 'lib/renderIf'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  compact?: boolean,
  highlighted?: boolean,
  onClick?: ?(event: SyntheticEvent) => any,
  selected?: boolean,
  showIcon?: boolean,
  href?: string,
  to?: string
}

export default function ActionItem ({
  children,
  compact,
  highlighted,
  onClick,
  selected,
  showIcon = true,
  href,
  to
  }: Props) {
  const isClickable = Boolean((onClick || to || href) && !highlighted)
  const className = cx('item', {
    disabled: !isClickable,
    compact,
    highlighted,
    href,
    isClickable,
    selected
  })

  if (!children) return null

  if (!isClickable) {
    return (
      <div className={className}>
        {children}
      </div>
    )
  }

  const content = (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        {children}
      </div>
      {renderIf(showIcon)(
        <div className={styles.icon}>
          <Icon
            set='utility'
            icon='forward'
            type={highlighted ? 'negative' : 'terciary'}
          />
        </div>
      )}
    </div>
  )

  if (to && process.env.__CLIENT__) {
    const { Link } = require('react-router')
    return (
      <Link className={className} to={to}>
        {content}
      </Link>
    )
  } else if (onClick) {
    return (
      <div className={className} onClick={onClick} role='button'>
        {content}
      </div>
    )
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  )
}
