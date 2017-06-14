// @flow
import { ReactChildren } from 'tcomb-react'
import autobind from 'autobind-decorator'
import React from 'react'

import styles from './index.scss'

type Props = {
  children?: ReactChildren,
  className?: string,
  onSubmit: () => Promise<*> | void
};

type State = {
  submitting: boolean
};

export default class Form extends React.Component {
  props: Props
  state: State = { submitting: false }
  mounted: boolean = false

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  @autobind onSubmit (event: SyntheticEvent) {
    event.preventDefault()
    if (this.state.submitting) return false

    const result = this.props.onSubmit()
    if (!result) return

    this.setState({ submitting: true }, () => {
      result.then(() => {
        if (this.mounted) this.setState({ submitting: false })
      })
    })
  }

  getClassNames () {
    const classes = [styles.form, this.props.className]

    if (this.state.submitting) {
      classes.push(styles.loading)
    }

    return classes.join(' ')
  }

  render () {
    return (
      <form className={this.getClassNames()} onSubmit={this.onSubmit}>
        {this.props.children}
      </form>
    )
  }
}
