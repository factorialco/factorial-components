// @flow
import _ from 'lodash'
import { Collection } from 'mobx-rest'
import { computed } from 'mobx'
import companyContracts from 'stores/collections/benefit/companyContracts'
import Product from 'stores/models/benefit/Product'

class Products<T: Product> extends Collection<T> {
  url (): string {
    return `/benefits/products`
  }

  model (): Class<Product> {
    return Product
  }

  @computed
  get active (): Array<Product> {
    const contractIds = companyContracts.active.map(contract =>
      contract.get('product_id')
    )

    return _.filter(
      this.models,
      model => contractIds.indexOf(model.get('id')) > -1
    )
  }
}

const singleton: Products<Product> = new Products()

export default singleton
