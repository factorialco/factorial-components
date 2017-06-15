// @flow
import { Model } from 'mobx-rest'

export default class BaseCompensationVersion extends Model {
  urlRoot (): string {
    return `/base_compensation_versions`
  }
}
