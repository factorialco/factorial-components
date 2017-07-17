// @flow
import Button from '../../Buttons/Button'
import ModalFooter from '../../Modal/Footer'
import React from 'react'

type Props = {
  label: string,
  disabled?: boolean
}

export default class ModalSubmit extends React.Component {
  props: Props

  render () {
    const { label, disabled } = this.props

    return (
      <ModalFooter>
        <Button disabled={disabled} label={label} submit />
      </ModalFooter>
    )
  }
}
