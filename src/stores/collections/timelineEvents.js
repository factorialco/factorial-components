// @flow
import TimelineEvent from 'stores/models/TimelineEvent'
import { Collection } from 'mobx-rest'

class TimelineEvents<T: TimelineEvent> extends Collection<T> {
  url (): string {
    return `/timeline_events`
  }

  model (): Class<TimelineEvent> {
    return TimelineEvent
  }
}

const singleton: TimelineEvents<TimelineEvent> = new TimelineEvents()
export default singleton
