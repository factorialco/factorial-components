// @flow
import React from 'react'
import classNames from 'classnames/bind'
import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  direction: 'up' | 'down' | 'left' | 'right',
  type: 'primary' | 'terciary' | 'brand' | 'negative'
}

export default function Chevron ({ direction, type }: Props) {
  let chevron

  switch (direction) {
    case 'left':
      chevron = (
        <path d='M15.8 22l-9.6-9.4c-.3-.3-.3-.8 0-1.1l9.6-9.4c.3-.3.7-.3 1 0l1 1c.3.3.3.7 0 1l-7.6 7.4c-.3.3-.3.8 0 1.1l7.5 7.4c.3.3.3.7 0 1l-1 1c-.2.2-.6.2-.9 0z' />
      )
      break
    case 'right':
      chevron = (
        <path d='M8.3 2l9.5 9.5c.3.3.3.7 0 1L8.3 22c-.3.2-.8.2-1.1 0l-1-1c-.2-.3-.2-.8 0-1.1l7.6-7.4c.2-.3.2-.7 0-1L6.3 4.1C6 3.8 6 3.3 6.3 3l1-1c.3-.2.7-.2 1 0z' />
      )
      break
    case 'up':
      chevron = (
        <path d='M2 15.8l9.5-9.6c.3-.2.7-.2 1 0l9.5 9.6c.2.3.2.7 0 1l-1 1c-.3.3-.8.3-1.1 0l-7.4-7.6c-.3-.2-.7-.2-1 0l-7.4 7.6c-.3.2-.8.2-1.1 0l-1-1c-.2-.3-.2-.7 0-1z' />
      )
      break
    case 'down':
      chevron = (
        <path d='M22 8.2l-9.5 9.6c-.3.2-.7.2-1 0L2 8.2c-.2-.3-.2-.7 0-1l1-1c.3-.3.8-.3 1.1 0l7.4 7.5c.3.3.7.3 1 0l7.4-7.5c.3-.2.8-.2 1.1 0l1 1c.2.3.2.7 0 1z' />
      )
      break
    default:
    // do nothing
  }

  return (
    <svg
      viewBox='0 0 25 25'
      xmlns='http://www.w3.org/2000/svg'
      className={cx('chevron', type)}
    >
      {chevron}
    </svg>
  )
}
