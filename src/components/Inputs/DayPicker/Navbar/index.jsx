// @flow
import Chevron from '../../../Chevron'
import React from 'react'

import styles from './index.scss'

type NavbarProps = {
  onNextClick?: () => mixed,
  onPreviousClick?: () => mixed
}

export default function Navbar (props: NavbarProps) {
  return (
    <div className={styles.navBar}>
      <span
        className={styles.prev}
        onClick={() => {
          props.onPreviousClick && props.onPreviousClick()
        }}
      >
        <Chevron direction='left' type='terciary' />
      </span>
      <span
        className={styles.next}
        onClick={() => {
          props.onNextClick && props.onNextClick()
        }}
      >
        <Chevron direction='right' type='terciary' />
      </span>
    </div>
  )
}
