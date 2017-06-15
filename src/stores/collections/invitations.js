// @flow
import { Collection } from 'mobx-rest'
import asyncAction from 'lib/asyncAction'
import employees from 'stores/collections/employees'
import Invitation from 'stores/models/Invitation'
import users from 'stores/collections/users'

class Invitations<T: Invitation> extends Collection<T> {
  url (): string {
    return `/invitations`
  }

  model (): Class<Invitation> {
    return Invitation
  }

  async inviteAll (): Promise<*> {
    const payload = await asyncAction(() => this.rpc('invite_all'))
    if (payload.success) {
      const promises = [users.fetch(), employees.fetch()]
      return asyncAction(() => Promise.all(promises))
    } else {
      return payload
    }
  }
}

const singleton: Invitations<Invitation> = new Invitations()

export default singleton
