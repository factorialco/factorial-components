// @flow
import TimeBook from 'stores/models/TimeBook'
import { Collection } from 'mobx-rest'

class TimeBooks<T: TimeBook> extends Collection<T> {
  url (): string {
    return `/time_books`
  }

  model (): Class<TimeBook> {
    return TimeBook
  }
}

const singleton: TimeBooks<TimeBook> = new TimeBooks()

export { TimeBooks }
export default singleton
