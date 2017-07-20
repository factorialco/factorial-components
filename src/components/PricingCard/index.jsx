// @flow
import { ReactChildren } from 'tcomb-react'
import cn from 'classnames/bind'
import React from 'react'
import renderIf from 'lib/renderIf'

import styles from './index.scss'

type Cost = {
  cost: string,
  periodicity?: string,
  extra_cost?: string,
  description: string
}

type Props = {
  cost: Cost,
  color?: string,
  footer?: ReactChildren,
  onClick?: () => void,
  selected?: boolean,
  title: string
}

const cx = cn.bind(styles)

const PricingCard = ({
  cost,
  color,
  footer,
  title,
  onClick,
  selected
  }: Props) => {
  return (
    <div
      onClick={onClick}
      className={cx('root', { selected, clickable: Boolean(onClick) })}
      style={selected && color ? { borderColor: color } : {}}
    >
      <header
        style={selected && color ? { backgroundColor: color } : {}}
        className={styles.header}
      >
        <h6 className={styles.title}>
          {title}
        </h6>
      </header>
      <section className={styles.content}>
        <header className={styles.costs}>
          <div>
            <span className={styles.cost}>
              {cost.cost}
            </span>
            {renderIf(Boolean(cost.periodicity))(
              <span>
                / {cost.periodicity}
              </span>
            )}
          </div>
          {renderIf(Boolean(cost.extra_cost))(
            <div>
              {cost.extra_cost}
            </div>
          )}
        </header>
        <div className={styles.description}>
          {cost.description}
        </div>
        {renderIf(Boolean(footer))(
          <footer>
            {footer}
          </footer>
        )}
      </section>
    </div>
  )
}

export default PricingCard
