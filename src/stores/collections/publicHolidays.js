// @flow
import PublicHoliday from 'stores/models/PublicHoliday'
import { Collection } from 'mobx-rest'

class PublicHolidays<T: PublicHoliday> extends Collection<T> {
  url (): string {
    return `/public_holidays`
  }

  model (): Class<PublicHoliday> {
    return PublicHoliday
  }
}

const singleton: PublicHolidays<PublicHoliday> = new PublicHolidays()

export { PublicHolidays }
export default singleton
