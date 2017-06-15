// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import Employee from './Employee'

export default class Task extends Model {
  @computed
  get employee (): ?Employee {
    if (this.has('employee_id')) {
      return employees.relatedTo(this)
    } else {
      return null
    }
  }
}
