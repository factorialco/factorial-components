// @flow
import _ from 'lodash'
import { ReactChildren, ReactElement } from 'tcomb-react'
import autobind from 'autobind-decorator'
import Chevron from 'components/Chevron'
import classNames from 'classnames/bind'
import Dropzone from 'react-dropzone'
import React from 'react'
import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  close?: string,
  disableClick?: boolean,
  disabled?: boolean,
  more?: string,
  onDrop?: ?(files: Array<File>, key: any) => mixed,
  overflowLimit?: number
};

type State = {
  isOpen: boolean;
}

export default class BoxList extends React.Component {
  props: Props;
  state: State = { isOpen: false }

  @autobind onClickToggle () {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen }
    })
  }

  @autobind renderCollapse (elements: number) {
    const { close, more } = this.props
    const { isOpen } = this.state
    const count = elements - this.props.overflowLimit

    return (
      <div className={styles.toggle} onClick={this.onClickToggle}>
        <span className={styles.text}>
          {isOpen
            ? close || 'Close'
            : more || `View ${count} more`}
        </span>
        <Chevron
          direction={isOpen ? 'up' : 'down'}
          type='terciary'
        />
      </div>
    )
  }

  @autobind renderItem (element: ReactElement, i: number) {
    return (
      <li className={styles.item} key={i}>
        {element}
      </li>
    )
  }

  render () {
    const { disabled, children, onDrop, overflowLimit, disableClick } = this.props
    const { isOpen } = this.state

    if (!children) return null

    const elements = React.Children.map(
      _.isArray(children) ? _.compact(children) : children,
      this.renderItem
    )

    const className = cx('list', { disabled })

    if (onDrop) {
      return (
        <Dropzone
          onDrop={onDrop}
          className={className}
          activeClassName={styles.dropActive}
          disableClick={disableClick}
        >
          {elements}
        </Dropzone>
      )
    } else if (overflowLimit) {
      const isOverflow = elements.length > overflowLimit
      return (
        <ul className={className}>
          {elements.slice(0, isOpen ? elements.length : overflowLimit)}
          {isOverflow && this.renderCollapse(elements.length)}
        </ul>
      )
    } else {
      return (
        <ul className={className}>
          {elements}
        </ul>
      )
    }
  }
}
