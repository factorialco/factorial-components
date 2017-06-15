// @flow
import Membership from 'stores/models/Membership'
import { Collection } from 'mobx-rest'

class Memberships<T: Membership> extends Collection<T> {
  url (): string {
    return `/memberships`
  }

  model (): Class<Membership> {
    return Membership
  }
}

const singleton: Memberships<Membership> = new Memberships()

export { Memberships }
export default singleton
