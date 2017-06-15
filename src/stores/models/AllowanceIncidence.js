// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import Employee from './Employee'

export default class AllowanceIncidence extends Model {
  @computed
  get employee (): Employee {
    return employees.relatedTo(this)
  }
}
