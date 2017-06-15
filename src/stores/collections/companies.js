// @flow
import { computed } from 'mobx'
import Company from 'stores/models/Company'
import { Collection } from 'mobx-rest'

class Companies<T: Company> extends Collection<T> {
  url (): string {
    return `/companies`
  }

  @computed
  get current (): Company {
    return this.mustFind({ current: true })
  }

  model (): Class<Company> {
    return Company
  }
}

const singleton: Companies<Company> = new Companies()

export default singleton
