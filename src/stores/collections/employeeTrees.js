// @flow
import EmployeeTree from 'stores/models/EmployeeTree'
import { Collection } from 'mobx-rest'

class EmployeeTrees<T: EmployeeTree> extends Collection<T> {
  url (): string {
    return '/employees/trees'
  }

  model (): Class<EmployeeTree> {
    return EmployeeTree
  }
}

const singleton: EmployeeTrees<EmployeeTree> = new EmployeeTrees()

export { EmployeeTrees }
export default singleton
