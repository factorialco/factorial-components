// @flow
import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import employees from 'stores/collections/employees'
import _ from 'lodash'
import Employee from 'stores/models/Employee'

export const EMAIL_REGEX = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/

export default class User extends Model {
  static ROLES = {
    admin: 'admin',
    basic: 'basic'
  }

  @computed
  get employee (): ?Employee {
    return employees.find({ access_id: this.get('id') })
  }

  fullName (): string {
    return `${this.get('first_name')} ${this.get('last_name')}`
  }

  isCurrent () {
    return this.get('current')
  }

  shortName (): string {
    if (this.get('last_name')) {
      return `${this.get('first_name')} ${this.get('last_name')[0]}.`
    }

    return `${this.get('first_name')}.`
  }

  isAdmin (): boolean {
    return this.get('role') === User.ROLES.admin
  }

  matchesFullName (search: string): boolean {
    const cleanFullName = _.toLower(_.deburr(this.fullName()))
    const cleanSearch = _.toLower(_.deburr(search))

    return cleanFullName.includes(cleanSearch)
  }

  static nullObject (): User {
    return new User({
      email: '-',
      first_name: 'Unknown',
      last_name: 'User',
      role: User.ROLES.admin,
      updated_at: Date.now(),
      created_at: Date.now()
    })
  }
}
