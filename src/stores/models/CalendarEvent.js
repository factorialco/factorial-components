// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import Employee from 'stores/models/Employee'

export default class CalendarEvent extends Model {
  @computed
  get employee (): Employee {
    const employeeId = this.metadata('employee_id')
    const employee = employees.get(employeeId)

    return employee || Employee.nullObject()
  }

  metadata (attribute: string): any {
    return (this.get('metadata') || {})[attribute]
  }
}
