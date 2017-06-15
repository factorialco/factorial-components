// @flow
import { Link } from 'react-router'
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import Icon from 'components/Icon'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  compact?: boolean,
  highlighted?: boolean,
  onClick?: ?(event: SyntheticEvent) => any,
  selected?: boolean,
  showIcon?: boolean,
  to?: string
};

export default function ActionItem (
  {
    children,
    compact,
    highlighted,
    onClick,
    selected,
    showIcon = true,
    to
  }: Props
) {
  const isClickable = Boolean((onClick || to) && !highlighted)
  const className = cx('item', {
    disabled: !isClickable,
    isClickable,
    highlighted,
    compact,
    selected
  })

  if (!children) return null

  if (isClickable) {
    return (
      <Link className={className} onClick={onClick} to={to}>
        <div className={styles.wrapper}>
          {children}
        </div>
        {showIcon && (
          <div className={styles.icon}>
            <Icon
              set='utility'
              icon='forward'
              type={highlighted ? 'negative' : 'terciary'}
            />
          </div>
        )}
      </Link>
    )
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}
