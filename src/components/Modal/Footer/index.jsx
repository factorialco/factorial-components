// @flow
import { ReactElement, ReactChildren } from 'tcomb-react'
import autobind from 'autobind-decorator'
import React from 'react'

import styles from './index.scss'

type Props = {
  children?: ReactChildren,
  vertical?: boolean
}

export default class ModalFooter extends React.Component {
  props: Props

  @autobind
  renderButton (element: ?ReactElement) {
    return (
      <div className={styles.wrapper}>
        {element}
      </div>
    )
  }

  render () {
    const { children, vertical } = this.props
    const className = vertical ? 'footerVertical' : 'footer'
    const count = React.Children.count(children)

    if (count > 2) throw new Error('We only support two buttons!')

    return (
      <div className={styles[`${className}-${count}`]}>
        {React.Children.map(children, this.renderButton)}
      </div>
    )
  }
}
