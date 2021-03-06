// @flow
import { ReactChildren } from 'tcomb-react'
import { Tooltip } from '../../Tooltip'
import { observer } from 'mobx-react'
import classNames from 'classnames/bind'
import Icon from '../../Icon'
import React from 'react'
import ReadOnlyField from '../../ReadOnlyField'
import renderIf from 'lib/renderIf'
import RoundedBadge from '../../RoundedBadge'
import WithToggleState from '../../WithToggleState'

import styles from './index.scss'

const cx = classNames.bind(styles)

type Props = {
  bang?: boolean,
  children?: ReactChildren,
  field: Object,
  focused: boolean,
  info?: ReactChildren,
  label: string,
  missingField?: string,
  readonly?: boolean,
  value?: string
}

@observer
export default class LabeledInput extends React.Component {
  props: Props

  renderIcons () {
    const { info, field } = this.props

    if (info) {
      return (
        <WithToggleState
          target={({ open, toggle }) =>
            <Tooltip
              type='primary'
              attachment='middle left'
              open={open}
              toggle={toggle}
            >
              <div className={styles.infoIcon}>
                <Icon type='primary' set='utility' icon='info' />
              </div>
              {info}
            </Tooltip>}
        />
      )
    }

    // TODO: Implement click to clear
    if (!field.isDirty && field.errors) {
      return <Icon type='wrong' set='utility' icon='clear' />
    }

    return null
  }

  renderLabel () {
    const { bang, field, label, missingField } = this.props

    return (
      <div>
        <div className={styles.labelContainer}>
          <label className={styles.label}>
            {label}
          </label>
        </div>
        <div className={styles.iconContainer}>
          {renderIf(!!bang && !field.value)(
            <WithToggleState
              target={({ open, toggle }) =>
                <Tooltip
                  attachment='bottom center'
                  open={open}
                  size='small'
                  toggle={toggle}
                  type='brand'
                >
                  <RoundedBadge size='small' type='brand'>
                    !
                  </RoundedBadge>
                  <div>
                    {missingField || 'Missing field'}
                  </div>
                </Tooltip>}
            />
          )}
        </div>
      </div>
    )
  }

  renderReadonly () {
    const { value, field, label } = this.props

    return <ReadOnlyField label={label} value={value || field.value} />
  }

  render () {
    const { info, readonly, field, focused } = this.props
    if (readonly) return this.renderReadonly()

    const error = !field.isDirty ? field.errors && field.errors[0] : null

    const className = cx('normal', {
      info,
      wrong: Boolean(error),
      focused
    })

    return (
      <Tooltip
        attachment='bottom center'
        type='wrong'
        size='small'
        open={focused && Boolean(error)}
      >
        <div className={className}>
          {this.renderLabel()}
          {this.props.children}
          <div className={styles.icons}>
            {this.renderIcons()}
          </div>
        </div>
        <div>
          {error}
        </div>
      </Tooltip>
    )
  }
}
