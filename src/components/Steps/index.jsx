// @flow
import React from 'react'
import classNames from 'classnames/bind'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  color: string,
  step: number,
  steps: number
};

function Steps ({ color, step, steps }: Props) {
  const data = []
  for (let i = 0; i < steps; i++) {
    data.push(i)
  }

  return (
    <div className={styles.steps}>
      {data.map((s, i) => {
        const dotActive = step >= (i + 1)
        const lineActive = step >= (i + 2)

        return (
          <div className={styles.container} key={i}>
            <div
              style={{ backgroundColor: dotActive ? color : '#DFE3E6' }}
              className={cx('step', { active: dotActive })}
            />
            <div
              style={{ backgroundColor: lineActive ? color : '#DFE3E6' }}
              className={cx('line', { active: lineActive })}
            />
          </div>
        )
      })}
    </div>
  )
}

Steps.defaultProps = {
  color: '#7386E6'
}

export default Steps
