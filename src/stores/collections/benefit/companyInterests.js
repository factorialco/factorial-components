// @flow
import CompanyInterest from 'stores/models/benefit/CompanyInterest'
import { Collection } from 'mobx-rest'

class CompanyInterests<T: CompanyInterest> extends Collection<T> {
  url (): string {
    return `/benefits/company_interests`
  }

  model (): Class<CompanyInterest> {
    return CompanyInterest
  }
}

const singleton: CompanyInterests<CompanyInterest> = new CompanyInterests()
export default singleton
