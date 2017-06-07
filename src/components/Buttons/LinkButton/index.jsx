// @flow
import React from 'react'
import { ReactChildren } from 'tcomb-react'

import styles from './index.scss'

type Props = {
  children?: ReactChildren,
  onClick?: ?(event: SyntheticEvent) => any
};

export default function LinkButon (
  {
    children,
    onClick
  }: Props
) {
  return (
    <button className={styles.buttonLink} onClick={onClick} type='button'>
      {children}
    </button>
  )
}
