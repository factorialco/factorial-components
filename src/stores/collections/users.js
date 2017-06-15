// @flow
import { computed } from 'mobx'
import User from 'stores/models/User'
import { Collection } from 'mobx-rest'

class Users<T: User> extends Collection<T> {
  url (): string {
    return `/accesses`
  }

  @computed
  get current (): User {
    return this.mustFind({ current: true })
  }

  model (): Class<User> {
    return User
  }
}

const singleton: Users<User> = new Users()

export { Users }
export default singleton
