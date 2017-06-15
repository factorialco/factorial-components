// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import Employee from 'stores/models/Employee'
import companyContracts from 'stores/collections/benefit/companyContracts'
import CompanyContract from 'stores/models/benefit/CompanyContract'
import BenefitProduct from 'stores/models/benefit/Product'

export default class EmployeeContract extends Model {
  @computed
  get employee (): Employee {
    return employees.relatedTo(this)
  }

  @computed
  get companyContract (): CompanyContract {
    const contractId = this.get('company_contract_id')
    return companyContracts.mustGet(contractId)
  }

  @computed
  get product (): BenefitProduct {
    return this.companyContract.product
  }

  isPending () {
    return this.get('status') === 'pending'
  }
}
