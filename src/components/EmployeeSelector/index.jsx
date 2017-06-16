// @flow
import _ from 'lodash'
import ActionItem from 'components/ActionItem'
import autobind from 'autobind-decorator'
import Avatar from 'components/Avatar'
import BoxList from 'components/BoxList'
import classNames from 'classnames/bind'
import Employee from 'stores/models/Employee'
import Icon from 'components/Icon'
import InlineSearch from 'components/InlineSearch'
import LinkButton from 'components/Buttons/LinkButton'
import React from 'react'
import ScrollableItem from 'components/ScrollableItem'
import ScrollableList from 'components/ScrollableList'

import styles from './index.scss'
const cx = classNames.bind(styles)

type Props = {
  all?: string,
  employees: Array<Object>,
  label?: string,
  none?: string,
  onSelectEmployee: (id: number) => void,
  onSelectMultiple?: (seledtedUserIds: Array<number>) => void,
  placeholder?: string,
  selectedEmployeeIds: Array<number>
};

type State = {
  search: string
};

export default class EmployeeSelector extends React.Component {
  props: Props;
  state: State = {
    search: ''
  };

  @autobind onSearch (event: any) {
    this.setState({ search: event.target.value || '' })
  }

  onClickEmployee (employee: Employee) {
    return () => {
      this.props.onSelectEmployee(employee.get('id'))
    }
  }

  renderBlank () {
    const { placeholder } = this.props

    return (
      <div className={styles.blank}>
        {placeholder || 'Employees not found'}
      </div>
    )
  }

  @autobind renderEmployee (employee: Employee) {
    const { selectedEmployeeIds } = this.props
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
                <Avatar user={employee.user} size='short' />
              </div>

              <div className={styles.name}>
                {employee.user.fullName()}
              </div>
            </div>
            <div className={styles.checkbox}>
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

  @autobind onSelectAll () {
    const { employees, onSelectMultiple } = this.props
    if (onSelectMultiple) {
      onSelectMultiple(employees.map(_.method('get', 'id')))
    }
  }

  @autobind onSelectNone () {
    const { onSelectMultiple } = this.props
    if (onSelectMultiple) onSelectMultiple([])
  }

  renderHelperBtns () {
    const { label, all, none } = this.props

    return (
      <div className={styles.actions}>
        <div className={styles.label}>
          {label || 'select'}:
        </div>
        <LinkButton onClick={this.onSelectAll}>
          {all || 'all'}
        </LinkButton>
        <LinkButton onClick={this.onSelectNone}>
          {none || 'none'}
        </LinkButton>
      </div>
    )
  }

  renderControls (filteredEmployees: Array<Employee>) {
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
    const { employees } = this.props
    const filteredEmployees = _.sortBy(
      _.filter(employees, employee => employee.user.matchesFullName(this.state.search)),
      employee => employee.user.fullName()
    )

    return (
      <BoxList>
        <InlineSearch search={this.state.search} onSearch={this.onSearch} />
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
