// @flow
import React from 'react'
import MomentLocaleUtils from 'react-day-picker/moment'

import styles from './index.scss'

type CaptionProps = {
  date: Date,
  localeUtils: Class<MomentLocaleUtils>,
  onChange: (date: Date) => mixed,
  fromMonth: Date,
  toMonth: Date
};

export default function Caption (
  {
    date,
    localeUtils,
    onChange,
    fromMonth,
    toMonth
  }: CaptionProps
) {
  const months = localeUtils.getMonths()
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
      <select
        className={styles.month}
        name='month'
        onChange={handleChange}
        value={date.getMonth()}
      >
        {months.map((month, i) => (
          <option key={i} value={i}>
            {month}
          </option>
        ))}
      </select>
      <select
        className={styles.year}
        name='year'
        onChange={handleChange}
        value={date.getFullYear()}
      >
        {years.map((year, i) => (
          <option key={i} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  )
}
