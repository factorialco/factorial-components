// @flow
import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import CompanyHoliday from 'stores/models/CompanyHoliday'
import companyHolidays from 'stores/collections/companyHolidays'
import Employee from 'stores/models/Employee'
import employees from 'stores/collections/employees'

export default class Location extends Model {
  @computed
  get isMainLocation (): boolean {
    return this.get('main_location')
  }

  @computed
  get employees (): Array<Employee> {
    return employees.filter({
      location_id: this.get('id'),
      terminated_on: null
    })
  }

  @computed
  get holidays (): Array<CompanyHoliday> {
    return companyHolidays.filter({ location_id: this.get('id') })
  }
}
