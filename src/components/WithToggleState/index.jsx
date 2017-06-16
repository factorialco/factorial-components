// @flow
import React from 'react'
import autobind from 'autobind-decorator'
import { ReactElement } from 'tcomb-react'

type Params = {
  open: boolean,
  toggle: (value: boolean) => () => void
};

type Props = {
  opened?: boolean,
  target: (params: Params) => ReactElement
};

type State = {
  open: boolean
};

export default class WithToggleState extends React.Component {
  props: Props;
  state: State = { open: false }

  componentWillMount () {
    if (this.props.opened) {
      this.setState({ open: this.props.opened })
    }
  }

  @autobind onToggle (value: boolean) {
    return () => this.setState({ open: value })
  }

  render () {
    const { target } = this.props
    const { open } = this.state

    return target({
      open,
      toggle: this.onToggle
    })
  }
}
