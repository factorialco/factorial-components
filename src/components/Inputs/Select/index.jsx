// @flow
import { observer } from 'mobx-react'
import _ from 'lodash'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import LabeledInput from '../../Inputs/LabeledInput'
import React from 'react'

import styles from './index.scss'

import type { SelectWithOptionsProps, SelectOption } from '../types'

const cx = classNames.bind(styles)

type ComponentState = {
  focused: boolean
}

@observer
export default class Select extends React.Component {
  props: SelectWithOptionsProps
  state: ComponentState = {
    focused: false
  }

  @autobind
  onChange (event: any) {
    // TODO: implement SyntheticEvent when flow supports it
    this.props.field.set(event.target.value)
    if (this.props.onChange) this.props.onChange(event.target.value)
  }

  @autobind
  onFocus (_event: mixed) {
    this.setState({ focused: true })
  }

  @autobind
  onBlur (_event: mixed) {
    this.setState({ focused: false })
  }

  renderOptgroups () {
    const { options } = this.props

    if (Array.isArray(options)) return this.renderOptions(options)

    return _.map(options, (options, label) =>
      <optgroup label={label} key={label}>
        {this.renderOptions(options)}
      </optgroup>
    )
  }

  renderOptions (options: Array<SelectOption>) {
    const { showOriginalLabelText } = this.props
    return options.map(opt => {
      const label = showOriginalLabelText ? opt.label : _.capitalize(opt.label)
      return (
        <option value={opt.value} key={opt.value} disabled={opt.disabled}>
          {label}
        </option>
      )
    })
  }

  renderDefaultOption () {
    if (!this.props.default) return null

    return (
      <option disabled value=''>
        {this.props.default}
      </option>
    )
  }

  renderNoneOption () {
    const { none } = this.props
    if (!none) return null

    const label = typeof none === 'string' ? `-- ${none} --` : '-- none --'

    return (
      <option value='' key='__none'>
        {label}
      </option>
    )
  }

  getValue () {
    const { field } = this.props
    const value = field.value

    if (_.isBoolean(value)) return String(value)

    return value || ''
  }

  render () {
    const { bang, field, label, info, readonly } = this.props
    const classNames = cx('normal', {
      wrong: !field.isDirty && field.errors,
      focused: this.state.focused
    })

    return (
      <LabeledInput
        bang={bang}
        label={label}
        field={field}
        info={info}
        readonly={readonly}
        focused={this.state.focused}
      >
        <select
          className={classNames}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.getValue()}
        >
          {this.renderDefaultOption()}
          {this.renderNoneOption()}
          {this.renderOptgroups()}
        </select>
      </LabeledInput>
    )
  }
}
