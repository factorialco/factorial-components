// @flow
import _ from 'lodash'
import { computed } from 'mobx'
import { Collection } from 'mobx-rest'
import CompanyContract from 'stores/models/benefit/CompanyContract'

class CompanyContracts<T: CompanyContract> extends Collection<T> {
  url (): string {
    return `/benefits/company_contracts`
  }

  model (): Class<CompanyContract> {
    return CompanyContract
  }

  @computed
  get active (): Array<CompanyContract> {
    return _.filter(this.models, model => model.isActive())
  }
}

const singleton: CompanyContracts<CompanyContract> = new CompanyContracts()
export default singleton
