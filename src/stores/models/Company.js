// @flow
import { computed } from 'mobx'
import { Model } from 'mobx-rest'
import locations from 'stores/collections/locations'
import Location from 'stores/models/Location'
import _ from 'lodash'

export default class Company extends Model {
  @computed
  get mainLocation (): Location {
    const locationId = this.get('location_id')
    return locations.mustGet(locationId)
  }

  matchesName (search: string): boolean {
    const cleanName = _.toLower(_.deburr(this.get('name')))
    const cleanSearch = _.toLower(_.deburr(search))

    return cleanName.includes(cleanSearch)
  }
}
