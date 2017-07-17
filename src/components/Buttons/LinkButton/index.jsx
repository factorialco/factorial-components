// @flow
import React from 'react'
import { ReactChildren } from 'tcomb-react'

import styles from './index.scss'

type Props = {
  color?: string,
  children?: ReactChildren,
  onClick?: ?(event: SyntheticEvent) => any
}

export default function LinkButon ({ children, color, onClick }: Props) {
  return (
    <button
      style={color ? { color } : {}}
      className={styles.buttonLink}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  )
}
