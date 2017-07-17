// @flow
import { ReactChildren } from 'tcomb-react'
import React from 'react'

type Props = {
  children?: ReactChildren
}

export default function TableHead ({ children }: Props) {
  return (
    <thead>
      {children}
    </thead>
  )
}
