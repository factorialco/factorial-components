// @flow
import { computed } from 'mobx'
import Employee from 'stores/models/Employee'
import users from 'stores/collections/users'
import { Collection, Model } from 'mobx-rest'
import _ from 'lodash'

class Employees<T: Employee> extends Collection<T> {
  url (): string {
    return `/employees`
  }

  relatedTo (model: Model): Employee {
    const employeeId = model.get('employee_id')
    return this.mustGet(employeeId)
  }

  @computed
  get active (): Array<Employee> {
    return _.filter(this.models, model => !model.isTerminated())
  }

  @computed
  get uninvited (): Array<Employee> {
    return _.filter(
      this.models,
      model => !model.user.get('invited') && !model.isTerminated()
    )
  }

  model (): Class<Employee> {
    return Employee
  }

  findByEmail (email: string): ?Employee {
    const user = users.find({ email })
    if (!user) return null
    return user.employee
  }
}

const singleton: Employees<Employee> = new Employees()

export { Employees }
export default singleton
