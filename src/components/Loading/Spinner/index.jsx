// @flow
import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  negative?: boolean,
  small?: boolean
};

export default function Spinner (
  {
    negative,
    small
  }: Props
) {
  const className = cx('spinner', {
    negative,
    small
  })

  return (
    <div className={className}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='40'
        height='40'
        viewBox='0 0 50 50'
      >
        <path
          d='M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.067c0-8.07 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z'
        >
        </path>
      </svg>
    </div>
  )
}
