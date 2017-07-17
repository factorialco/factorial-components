// @flow
import { ReactChildren } from 'tcomb-react'
import React from 'react'

type Props = {
  children?: ReactChildren
}

export default function TableBody ({ children }: Props) {
  return (
    <tbody>
      {children}
    </tbody>
  )
}
