// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import benefitProducts from 'stores/collections/benefit/products'
import BenefitProduct from 'stores/models/benefit/Product'
import employeeContracts from 'stores/collections/benefit/employeeContracts'
import EmployeeContract from 'stores/models/benefit/EmployeeContract'

export default class CompanyContract extends Model {
  @computed
  get product (): BenefitProduct {
    const productId = this.get('product_id')
    return benefitProducts.mustGet(productId)
  }

  @computed
  get employeeContracts (): Array<EmployeeContract> {
    return employeeContracts.filter({
      company_contract_id: this.get('id')
    })
  }

  isPending () {
    return this.get('status') === 'pending'
  }

  isActive () {
    return this.get('status') === 'active'
  }
}
