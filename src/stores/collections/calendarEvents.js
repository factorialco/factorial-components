// @flow
import CalendarEvent from 'stores/models/CalendarEvent'
import { Collection } from 'mobx-rest'

export class CalendarEvents<T: CalendarEvent> extends Collection<T> {
  url (): string {
    return `/calendar_events`
  }

  model (): Class<CalendarEvent> {
    return CalendarEvent
  }

  get modelsWithoutPendingLeaves (): Array<CalendarEvent> {
    return this.models.filter(ce => {
      if (ce.get('type') !== 'leave') return true
      return ce.metadata('approved')
    })
  }
}

const singleton: CalendarEvents<CalendarEvent> = new CalendarEvents()

export default singleton
