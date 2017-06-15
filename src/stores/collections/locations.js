// @flow
import Location from 'stores/models/Location'
import { Collection } from 'mobx-rest'

class Locations<T: Location> extends Collection<T> {
  url (): string {
    return `/locations`
  }

  model (): Class<Location> {
    return Location
  }
}

const singleton: Locations<Location> = new Locations()

export { Locations }
export default singleton
