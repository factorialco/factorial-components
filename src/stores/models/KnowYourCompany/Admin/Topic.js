// @flow
import { Model } from 'mobx-rest'

export default class Topic extends Model {
  static nullObject (props): Topic {
    return new Topic({
      id: null,
      title: '',
      recurrency: '',
      ...props
    })
  }
}
