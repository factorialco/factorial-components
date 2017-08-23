// @flow
import { ReactElement, ReactChildren } from 'tcomb-react'
import type { Colors } from '../Illustration'

export type CustomIllustration = {
  illustration: ReactElement,
  backgroundColor?: string
}

export type Modal = {
  big?: boolean,
  children?: ReactChildren,
  closePortal?: Function,
  color?: string,
  description?: string,
  fixed?: boolean, // Only used for the style guide
  header?: Function,
  illustration?: string,
  locked?: boolean,
  negative?: boolean,
  onBack?: Function,
  onClose: () => void,
  onSubmit?: Function,
  submit: Function,
  title?: string,
  type?: Colors
}

export type Header = {
  color?: string,
  description?: string,
  illustration?: string,
  locked?: boolean,
  negative?: boolean,
  onBack?: Function,
  onClose: () => void,
  title?: string,
  type?: Colors
}
