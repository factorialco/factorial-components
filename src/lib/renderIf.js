// @flow
import { ReactElement } from 'tcomb-react'

type Thunk = ReactElement | (() => ReactElement)

export default function renderIf (predicate: boolean) {
  return (thunk: Thunk): ?ReactElement => {
    if (!predicate) return null

    return typeof thunk === 'function' ? thunk() : thunk
  }
}
