// @flow
import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import memberships from 'stores/collections/memberships'
import Membership from 'stores/models/Membership'

export default class Team extends Model {
  capitals (): string {
    const words: Array<String> = this.get('name').split(' ').slice(0, 2)
    return words.map(word => word.charAt(0)).join('')
  }

  @computed
  get memberships (): Array<Membership> {
    return memberships.filter({
      team_id: this.get('id')
    })
  }

  static nullObject (): Team {
    return new Team({
      name: '-',
      updated_at: Date.now(),
      created_at: Date.now()
    })
  }
}
