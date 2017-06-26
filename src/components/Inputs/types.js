// @flow
import { ReactChildren } from 'tcomb-react'

export type State = 'normal' | 'focused' | 'correct' | 'wrong'

export type SelectOption = {
  label: string,
  value: mixed,
  disabled?: boolean
}

export type SelectOptgroup = {
  [label: string]: Array<SelectOption>
}

export type SelectProps = {
  bang?: boolean,
  default?: string,
  field: Object,
  info?: ReactChildren,
  label: string,
  none?: boolean | string,
  onChange?: (argument?: any) => void,
  readonly?: boolean,
  state?: State
}

export type SelectWithOptionsProps = SelectProps & {
  options: Array<SelectOption> | SelectOptgroup,
  showOriginalLabelText?: boolean
}
