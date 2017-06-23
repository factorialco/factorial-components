// @flow
import { ReactChildren } from 'tcomb-react'
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
  footer?: ReactChildren,
  title: string
}

const PricingCard = ({ cost, footer, title }: Props) => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h6 className={styles.title}>{title}</h6>
      </header>
      <section className={styles.content}>
        <header className={styles.costs}>
          <div>
            <span className={styles.cost}>
              {cost.cost}
            </span>
            {renderIf(Boolean(cost.periodicity))(
              <span>
                &nbsp; / &nbsp;
                {cost.periodicity}
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
