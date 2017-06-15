// @flow
import Leave from 'stores/models/Leave'
import { Collection } from 'mobx-rest'

class Leaves<T: Leave> extends Collection<T> {
  url (): string {
    return `/leaves`
  }

  model (): Class<Leave> {
    return Leave
  }
}

const singleton: Leaves<Leave> = new Leaves()

export { Leaves }
export default singleton
