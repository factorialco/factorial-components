// @flow
import { observer } from 'mobx-react'
import { Field } from 'factorial-form'
import { ReactElement, ReactChildren } from 'tcomb-react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import LabeledInput from '../../Inputs/LabeledInput'
import React from 'react'

import styles from './index.scss'

type Props = {
  bang?: boolean,
  field: Field,
  focused?: boolean,
  autofocus?: boolean,
  getRef?: (ref: ReactElement) => mixed,
  info?: ReactChildren,
  label: string,
  onBlur?: (e: SyntheticEvent) => mixed,
  onFocus?: (e: SyntheticEvent) => mixed,
  placeholder?: string,
  readonly?: boolean,
  select?: boolean,
  type?: 'text' | 'password',
  value?: string
}

type ComponentState = {
  focused: boolean
}

const cx = classNames.bind(styles)

@observer
export default class Text extends React.Component {
  props: Props
  state: ComponentState = {
    focused: false
  }

  @autobind
  onChange (event: any) {
    this.props.field.set(event.target.value)
  }

  @autobind
  onFocus (event: any) {
    const { onFocus } = this.props

    this.setState({ focused: true }, () => {
      onFocus && onFocus(event)
    })
  }

  @autobind
  onBlur (event: any) {
    const { onBlur } = this.props
    this.setState({ focused: false }, () => {
      onBlur && onBlur(event)
    })
  }

  render () {
    const {
      bang,
      placeholder,
      field,
      info,
      label,
      getRef,
      type,
      readonly,
      focused,
      autofocus,
      value
    } = this.props

    const inputClassName = cx('normal', {
      wrong: !field.isDirty && field.errors,
      focused: focused || this.state.focused,
      select: this.props.select
    })

    return (
      <LabeledInput
        bang={bang}
        label={label}
        value={value}
        field={field}
        info={info}
        focused={focused || this.state.focused}
        readonly={readonly}
      >
        <input
          ref={el => {
            getRef && getRef(el)
          }}
          className={inputClassName}
          placeholder={placeholder}
          value={value || field.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          type={type || 'text'}
          autoFocus={autofocus && 'autofocus'}
        />
      </LabeledInput>
    )
  }
}
