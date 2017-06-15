// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import teams from 'stores/collections/teams'
import Employee from './Employee'
import Team from 'stores/models/Team'

export default class Membership extends Model {
  isLead (): boolean {
    return this.get('lead')
  }

  @computed
  get employee (): Employee {
    return employees.relatedTo(this)
  }

  @computed
  get team (): Team {
    return teams.mustGet(this.get('team_id'))
  }
}
