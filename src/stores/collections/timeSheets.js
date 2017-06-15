// @flow
import TimeSheet from 'stores/models/TimeSheet'
import { Collection } from 'mobx-rest'

class TimeSheets<T: TimeSheet> extends Collection<T> {
  url (): string {
    return `/time_sheets`
  }

  model (): Class<TimeSheet> {
    return TimeSheet
  }
}

const singleton: TimeSheets<TimeSheet> = new TimeSheets()

export { TimeSheets }
export default singleton
