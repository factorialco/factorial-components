// @flow
import _ from 'lodash'
import ActionItem from '../ActionItem'
import autobind from 'autobind-decorator'
import Avatar from '../Avatar'
import BoxList from '../BoxList'
import classNames from 'classnames/bind'
import Icon from '../Icon'
import InlineSearch from '../InlineSearch'
import LinkButton from '../Buttons/LinkButton'
import React from 'react'
import ScrollableItem from '../ScrollableItem'
import ScrollableList from '../ScrollableList'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  all?: string,
  color?: string,
  employees: Array<Object>,
  fallback?: string,
  label?: string,
  none?: string,
  onSelectEmployee: (id: number) => void,
  onSelectMultiple?: (seledtedUserIds: Array<number>) => void,
  placeholder?: string,
  rootPath?: string,
  selectedEmployeeIds: Array<number>
}

type State = {
  search: string
}

export default class EmployeeSelector extends React.Component {
  props: Props
  state: State = {
    search: ''
  }

  @autobind
  onSearch (event: any) {
    this.setState({ search: event.target.value || '' })
  }

  onClickEmployee (employee: Object) {
    return () => {
      this.props.onSelectEmployee(employee.get('id'))
    }
  }

  renderBlank () {
    const { fallback } = this.props

    return (
      <div className={styles.blank}>
        {fallback || 'Employees not found'}
      </div>
    )
  }

  @autobind
  renderEmployee (employee: Object) {
    const { color, selectedEmployeeIds, rootPath } = this.props
    const selected = _.includes(selectedEmployeeIds, employee.get('id'))

    return (
      <ScrollableItem key={employee.get('id')}>
        <ActionItem
          onClick={this.onClickEmployee(employee)}
          compact
          selected={selected}
          showIcon={false}
        >
          <div className={cx('employee', { selected })}>
            <div className={styles.employeeInfo}>
              <div className={styles.avatar}>
                <Avatar
                  url={
                    employee.user.has('avatar') && employee.user.get('avatar')
                      ? `${rootPath || ''}${employee.user.get('avatar')}`
                      : ''
                  }
                  size='short'
                />
              </div>

              <div className={styles.name}>
                {employee.user.fullName()}
              </div>
            </div>
            <div
              style={
                color && selected
                  ? { background: color, borderColor: color }
                  : {}
              }
              className={styles.checkbox}
            >
              {selected &&
                <Icon
                  icon='check'
                  set='utility'
                  size='small'
                  type='negative'
                />}
            </div>
          </div>
        </ActionItem>
      </ScrollableItem>
    )
  }

  @autobind
  onSelectAll () {
    const { employees, onSelectMultiple } = this.props
    if (onSelectMultiple) {
      onSelectMultiple(employees.map(_.method('get', 'id')))
    }
  }

  @autobind
  onSelectNone () {
    const { onSelectMultiple } = this.props
    if (onSelectMultiple) onSelectMultiple([])
  }

  renderHelperBtns () {
    const { color, label, all, none } = this.props

    return (
      <div className={styles.actions}>
        <div className={styles.label}>
          {label || 'select'}:
        </div>
        <div className={styles.links}>
          <LinkButton size='small' color={color} onClick={this.onSelectAll}>
            {all || 'all'}
          </LinkButton>
          <LinkButton size='small' color={color} onClick={this.onSelectNone}>
            {none || 'nsone'}
          </LinkButton>
        </div>
      </div>
    )
  }

  renderControls (filteredEmployees: Array<Object>) {
    const { onSelectMultiple } = this.props

    if (!filteredEmployees.length || !!this.state.search) return null
    if (!onSelectMultiple) return null

    return (
      <div className={styles.controls}>
        {this.renderHelperBtns()}
      </div>
    )
  }

  render () {
    const { employees, placeholder } = this.props
    const filteredEmployees = _.sortBy(
      _.filter(employees, employee =>
        employee.user.matchesFullName(this.state.search)
      ),
      employee => employee.user.fullName()
    )

    return (
      <BoxList>
        <InlineSearch
          onSearch={this.onSearch}
          placeholder={placeholder}
          search={this.state.search}
        />
        {this.renderControls(filteredEmployees)}
        <ScrollableList>
          {filteredEmployees.length > 0
            ? filteredEmployees.map(this.renderEmployee)
            : this.renderBlank()}
        </ScrollableList>
      </BoxList>
    )
  }
}
