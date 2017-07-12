// @flow
import { ReactElement, ReactChildren } from 'tcomb-react'
import type { Colors } from 'components/Illustration'

export type CustomIllustration = {
  illustration: ReactElement,
  backgroundColor?: string
}

export type Modal = {
  big?: boolean,
  children?: ReactChildren,
  color?: string,
  description?: string,
  fixed?: boolean, // Only used for the style guide
  headerContent?: Function,
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
