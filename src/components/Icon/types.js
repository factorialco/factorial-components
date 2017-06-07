// @flow
export type IconType = {
  set: string,
  icon: string,
  opacity?: number,
  size?: 'smaller' | 'small' | 'medium' | 'big',
  type?: | 'primary'
    | 'brand'
    | 'terciary'
    | 'correct'
    | 'wrong'
    | 'accent'
    | 'negative'
    | 'black'
}
