// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import Icon from 'components/Icon'
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
};

export default function ActionItem (
  {
    children,
    compact,
    highlighted,
    onClick,
    selected,
    showIcon = true,
    href
  }: Props
) {
  const isClickable = Boolean((onClick || href) && !highlighted)
  const className = cx('item', {
    disabled: !isClickable,
    compact,
    highlighted,
    href,
    isClickable,
    selected
  })

  if (!children) return null

  if (isClickable) {
    if (onClick) {
      return (
        <div className={className} onClick={onClick}>
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
        </div>
      )
    } else {
      return (
        <a className={className} href={href}>
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
        </a>
      )
    }
  }

  return (
    <div className={className}>
      {children}
    </div>
  )
}
