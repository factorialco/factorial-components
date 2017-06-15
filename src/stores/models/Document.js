// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import { users, employees } from 'stores/collections'
import UserModel from './User'
import EmployeeModel from './Employee'

export type DocumentType =
  | 'contract'
  | 'payslip'
  | 'modelo-145'
  | 'id-document'
  | 'sick-leave'

export default class Document extends Model {
  @computed
  get createdByMe (): boolean {
    return users.current.get('id') === this.get('author_id')
  }

  @computed
  get author (): UserModel {
    return users.get(this.get('author_id')) || UserModel.nullObject()
  }

  @computed
  get employee (): EmployeeModel {
    return employees.mustGet(this.get('employee_id'))
  }
}
