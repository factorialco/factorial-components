// @flow
import React from 'react'
import styles from './index.scss'
import MomentLocaleUtils from 'react-day-picker/moment'
import moment from 'moment'
import Chevron from 'components/Chevron'
import WithToggleState from 'components/WithToggleState'

type CaptionProps = {
  date: Date,
  fromMonth: Date,
  localeUtils: Class<MomentLocaleUtils>,
  onChange: (date: Date) => mixed,
  toMonth: Date
}

export default function Caption ({
  date,
  localeUtils,
  onChange,
  fromMonth,
  toMonth
}: CaptionProps) {
  const months = moment.monthsShort()
  const years = []

  for (let i = fromMonth.getFullYear(); i <= toMonth.getFullYear(); i++) {
    years.push(i)
  }

  function handleChange (e) {
    const { year, month } = e.target.form
    onChange(new Date(year.value, month.value))
  }

  return (
    <div className={styles.caption}>
      <WithToggleState
        target={({ open, toggle }) =>
          <div
            className={styles.selectWrapper}
            onMouseEnter={toggle(true)}
            onMouseLeave={toggle(false)}
          >
            <select
              className={styles.month}
              name='month'
              onChange={handleChange}
              value={date.getMonth()}
            >
              {months.map((month, i) =>
                <option className={styles.option} key={i} value={i}>
                  {month}
                </option>
              )}
            </select>
            <Chevron
              direction='down'
              type={open ? 'brand' : 'terciary'}
              size='small'
            />
          </div>}
      />
      <WithToggleState
        target={({ open, toggle }) =>
          <div
            className={styles.selectWrapper}
            onMouseEnter={toggle(true)}
            onMouseLeave={toggle(false)}
          >
            <select
              className={styles.year}
              name='year'
              onChange={handleChange}
              value={date.getFullYear()}
            >
              {years.map((year, i) =>
                <option className={styles.option} key={i} value={year}>
                  {year}
                </option>
              )}
            </select>
            <Chevron
              direction='down'
              type={open ? 'brand' : 'terciary'}
              size='small'
            />
          </div>}
      />
    </div>
  )
}
