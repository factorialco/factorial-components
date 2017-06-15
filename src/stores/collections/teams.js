// @flow
import Team from 'stores/models/Team'
import { Collection } from 'mobx-rest'

class Teams<T: Team> extends Collection<T> {
  url (): string {
    return `/teams`
  }

  model (): Class<Team> {
    return Team
  }
}

const singleton: Teams<Team> = new Teams()
export default singleton
