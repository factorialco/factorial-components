// @flow
type Sizes = 'smaller' | 'small' | 'medium' | 'big'

type Types =
  | 'primary'
  | 'brand'
  | 'terciary'
  | 'correct'
  | 'wrong'
  | 'accent'
  | 'negative'
  | 'black'

export type IconType = {
  icon: string,
  set: string,
  opacity?: number,
  size?: Sizes,
  type?: Types
}
