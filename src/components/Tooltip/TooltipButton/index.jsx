// @flow
import { ReactChildren } from 'tcomb-react'
import classNames from 'classnames/bind'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  onClick: Function,
  disabled?: boolean
}

export default function TooltipButton ({ onClick, children, disabled }: Props) {
  return (
    <button
      className={cx('tooltipButton', { disabled })}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
