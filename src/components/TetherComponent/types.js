// @flow
export type Attachment =
  | 'top center'
  | 'top left'
  | 'top right'
  | 'middle center'
  | 'middle left'
  | 'middle right'
  | 'bottom center'
  | 'bottom left'
  | 'bottom right'

export type Constraint = {
  to: string,
  attachment: string,
  pin: boolean
}
