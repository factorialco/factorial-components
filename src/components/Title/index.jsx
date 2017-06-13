// @flow
import cn from 'classnames/bind'
import Separator from 'components/Separator'
import React from 'react'

import styles from './index.scss'

type Types =
  | 'brand'
  | 'primary'

type Props = {
  label: string,
  type: Types,
  separator: boolean,
  centered: boolean
}

const cx = cn.bind(styles)

const Title = ({ centered, label, separator, type }: Props) => {
  return (
    <div className={cx('root', { centered })}>
      <div className={styles.title}>
        {label}
      </div>
      {separator && (
        <div className={styles.separator}>
          <Separator type={type || 'brand'} />
        </div>
      )}
    </div>
  )
}

export default Title
