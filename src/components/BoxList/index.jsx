// @flow
import _ from 'lodash'
import { ReactChildren, ReactElement } from 'tcomb-react'
import autobind from 'autobind-decorator'
import classNames from 'classnames/bind'
import Dropzone from 'react-dropzone'
import React from 'react'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  children?: ReactChildren,
  disableClick?: boolean,
  disabled?: boolean,
  onDrop?: ?(files: Array<File>, key: any) => mixed
};

export default class BoxList extends React.Component {
  props: Props;

  @autobind renderItem (element: ReactElement, i: number) {
    return (
      <li className={styles.item} key={i}>
        {element}
      </li>
    )
  }

  render () {
    const { disabled, children, onDrop, disableClick } = this.props

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
    } else {
      return (
        <ul className={className}>
          {elements}
        </ul>
      )
    }
  }
}
