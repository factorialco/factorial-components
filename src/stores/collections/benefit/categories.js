// @flow
import Category from 'stores/models/benefit/Category'
import { Collection } from 'mobx-rest'

class Categories<T: Category> extends Collection<T> {
  url (): string {
    return `/benefits/categories`
  }

  model (): Class<Category> {
    return Category
  }
}

const singleton: Categories<Category> = new Categories()

export default singleton
