// @flow
import _ from 'lodash'
import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import employees from 'stores/collections/employees'
import locations from 'stores/collections/locations'
import Location from 'stores/models/Location'
import Membership from 'stores/models/Membership'
import memberships from 'stores/collections/memberships'
import moment from 'moment'
import Team from 'stores/models/Team'
import User from 'stores/models/User'
import users from 'stores/collections/users'
import timelineEvents from 'stores/collections/timelineEvents'

const EMPLOYEE_COMPLETION_FIELDS = [
  'address_line_1',
  'birthday_on',
  'city',
  'contact_name',
  'contact_number',
  'country',
  'first_name',
  'gender',
  'identifier',
  'last_name',
  'nationality',
  'phone_number',
  'state'
]

export default class Employee extends Model {
  static ROLES = {
    admin: 'admin',
    basic: 'basic'
  }

  @computed
  get user (): User {
    return users.get(this.get('access_id')) || User.nullObject()
  }

  @computed
  get location (): ?Location {
    return locations.get(this.get('location_id'))
  }

  @computed
  get employeeCompletionFields (): Array<string> {
    const fields = []
    if (this.user.isAdmin()) {
      fields.push(
        'base_compensation_amount_in_cents',
        'base_compensation_type',
        'hired_on'
      )
    }

    if (this.has('country') && this.get('country') === 'es') {
      fields.push('social_security_number')
    }

    if (!fields.length) return EMPLOYEE_COMPLETION_FIELDS

    return [...EMPLOYEE_COMPLETION_FIELDS, ...fields]
  }

  @computed
  get isCurrent (): boolean {
    return this.user.get('id') === users.current.get('id')
  }

  @computed
  get teams (): Array<Team> {
    return this.memberships.map(membership => {
      return membership.team
    })
  }

  @computed
  get teamsLedByEmployee (): Array<Team> {
    return this.memberships
      .filter(membership => {
        return (
          membership.get('employee_id') === this.get('id') &&
          membership.get('lead')
        )
      })
      .map(membership => membership.team)
  }

  @computed
  get peopleManagedByEmployee (): Array<Employee> {
    return employees.filter({ manager_id: this.get('id') })
  }

  @computed
  get peopleTimeoffManagedByEmployee (): Array<Employee> {
    return employees.filter({ timeoff_manager_id: this.get('id') })
  }

  @computed
  get memberships (): Array<Membership> {
    return memberships.filter({
      employee_id: this.get('id')
    })
  }

  @computed
  get timeoffManager (): ?Employee {
    const timeoffManagerId = this.get('timeoff_manager_id')

    if (!timeoffManagerId) return null

    return employees.get(timeoffManagerId)
  }

  @computed
  get managedEmployees (): Array<Employee> {
    const children = employees.filter({ manager_id: this.get('id') })
    return _.flatMap(
      children,
      (employee: Employee): Array<Employee> => employee.managedEmployees
    ).concat(children)
  }

  hasMissingCompensation () {
    return (
      this.user.isAdmin() &&
      (!this.get('base_compensation_amount_in_cents') ||
        !this.get('base_compensation_type'))
    )
  }

  isComplete (): boolean {
    return this.get('is_complete')
  }

  canBeTimeoffSupervisedByCurrent () {
    return (
      this.isTimeoffSupervisedByCurrent() ||
      this.isSupervisedByCurrent() ||
      users.current.isAdmin()
    )
  }

  canBeSupervisedByCurrent () {
    return this.isSupervisedByCurrent() || users.current.isAdmin()
  }

  isSupervisedByCurrent (): boolean {
    return this.get('supervised_by_current')
  }

  isTimeoffSupervisedByCurrent (): boolean {
    return this.get('timeoff_supervised_by_current')
  }

  isTerminated (): boolean {
    return moment(
      this.get('terminated_on'),
      'YYYY-MM-DD',
      true
    ).isSameOrBefore()
  }

  async unTerminate (): Promise<*> {
    const value = await this.rpc('unterminate')
    this.set(value)

    const data = { employee_id: this.get('id') }

    await Promise.all([timelineEvents.fetch({ data }), employees.fetch()])
  }

  static nullObject (): Employee {
    return new Employee({
      access_id: -1,
      address_line_1: null,
      address_line_2: null,
      birthday_on: null,
      city: null,
      base_compensation_amount_in_cents: null,
      base_compensation_type: null,
      country: null,
      gender: null,
      hired_on: '1970-01-01',
      holiday_allowance: null,
      identifier: null,
      is_complete: false,
      manager_id: null,
      postal_code: null,
      state: null,
      supervised_by_current: false,
      terminated_on: null,
      timeoff_manager_id: null,
      timeoff_supervised_by_current: false,
      job_title: null
    })
  }
}
