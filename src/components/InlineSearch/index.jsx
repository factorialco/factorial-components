// @flow
import * as React from 'react'
import classNames from 'classnames/bind'
import Icon from 'components/Icon'
import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  onSearch: (event: any) => void,
  placeholder?: string,
  search: string
};

export default function InlineSearch (props: Props) {
  const { placeholder, onSearch, search } = props
  const className = cx('search', {
    hasSearch: search.length > 0
  })

  return (
    <label className={className}>
      <input
        type='text'
        className={styles.searchInput}
        onChange={onSearch}
        value={search}
      />
      <div className={styles.searchLabel}>
        <div className={styles.searchLabelIcon}>
          <Icon set='utility' icon='search' type='terciary' size='small' />
        </div>
        <div className={styles.searchLabelText}>
          {placeholder || 'Search'}
        </div>
      </div>
    </label>
  )
}
