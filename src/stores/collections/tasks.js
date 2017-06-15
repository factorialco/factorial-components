// @flow
import Task from 'stores/models/Task'
import { Collection } from 'mobx-rest'

class Tasks<T: Task> extends Collection<T> {
  url (): string {
    return `/tasks`
  }

  model (): Class<Task> {
    return Task
  }
}

const singleton: Tasks<Task> = new Tasks()

export { Tasks }
export default singleton
