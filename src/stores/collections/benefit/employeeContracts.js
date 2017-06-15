// @flow
import EmployeeContract from 'stores/models/benefit/EmployeeContract'
import { Collection } from 'mobx-rest'

class EmployeeContracts<T: EmployeeContract> extends Collection<T> {
  url (): string {
    return `/benefits/employee_contracts`
  }

  model (): Class<EmployeeContract> {
    return EmployeeContract
  }
}

const singleton: EmployeeContracts<EmployeeContract> = new EmployeeContracts()

export default singleton
