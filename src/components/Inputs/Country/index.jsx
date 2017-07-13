// @flow
import _ from 'lodash'
import Loading from 'components/Loading'
import React from 'react'
import Select from 'components/Inputs/Select'

import type { SelectProps, SelectOption } from '../types'

// TODO: Make async and only load your current locale
import * as countryList from './countryList'

type Props = SelectProps & {
  placeholder?: string,
  locale: string,
  visibleCountries?: Array<string>
}

export default class Country extends React.Component {
  props: Props
  state: { list: ?Array<SelectOption> } = {
    list: null
  }

  componentWillMount () {
    const { visibleCountries, locale } = this.props
    let list = countryList[locale] || countryList.en
    if (visibleCountries) {
      list = list.filter(country => _.includes(visibleCountries, country.value))
    }
    this.setState({ list })
  }

  render () {
    const { placeholder } = this.props
    const { list } = this.state
    if (!list) return <Loading />

    const countriesByPreference = _.groupBy(
      _.filter(list, item => item.label && item.value),
      item => _.includes(['es', 'fr', 'ch'], item.value)
    )

    let options = countriesByPreference[true] || []

    if (countriesByPreference[false]) {
      options = options.concat([
        { label: '----------', value: null, disabled: true }
      ])
    }

    options = options.concat(
      _.sortBy(countriesByPreference[false], item => item.label)
    )

    return (
      <Select
        {..._.omit(this.props, 'visibleCountries')}
        default={placeholder || 'choose'}
        options={options}
      />
    )
  }
}
