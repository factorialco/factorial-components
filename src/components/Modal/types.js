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
  description?: string,
  fixed?: boolean, // Only used for the style guide
  locked?: boolean,
  negative?: boolean,
  onClose: () => void,
  title?: string,
  type?: Colors
}
