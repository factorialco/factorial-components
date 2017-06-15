// @flow
import AllowanceIncidence from 'stores/models/AllowanceIncidence'
import { Collection } from 'mobx-rest'

class AllowanceIncidences<T: AllowanceIncidence> extends Collection<T> {
  url (): string {
    return `/allowance_incidences`
  }

  model (): Class<AllowanceIncidence> {
    return AllowanceIncidence
  }
}

const singleton: AllowanceIncidences<AllowanceIncidence> = new AllowanceIncidences()

export { AllowanceIncidences }
export default singleton
