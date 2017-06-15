// @flow
import CompanyHoliday from 'stores/models/CompanyHoliday'
import { Collection } from 'mobx-rest'

class CompanyHolidays<T: CompanyHoliday> extends Collection<T> {
  url (): string {
    return `/company_holidays`
  }

  model (): Class<CompanyHoliday> {
    return CompanyHoliday
  }
}

const singleton: CompanyHolidays<CompanyHoliday> = new CompanyHolidays()
export { CompanyHolidays }
export default singleton
