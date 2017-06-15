// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import categories from 'stores/collections/benefit/categories'
import Category from 'stores/models/benefit/Category'
import companyContracts from 'stores/collections/benefit/companyContracts'
import CompanyContract from 'stores/models/benefit/CompanyContract'

export default class Product extends Model {
  @computed
  get category (): Category {
    const categoryId = this.get('category_id')
    return categories.mustGet(categoryId)
  }

  @computed
  get companyContract (): ?CompanyContract {
    const productId = this.get('id')
    const contract = companyContracts.find({
      product_id: productId
    })

    return contract
  }
}
