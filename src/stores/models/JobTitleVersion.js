// @flow
import { Model } from 'mobx-rest'

export default class JobTitleVersion extends Model {
  urlRoot (): string {
    return `/job_title_versions`
  }
}
