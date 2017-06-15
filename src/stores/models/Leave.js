// @flow
import { Model } from 'mobx-rest'
import { computed } from 'mobx'
import employees from 'stores/collections/employees'
import Employee from './Employee'
import _ from 'lodash'

type Type = 'brand' | 'correct' | 'accent'

const types = {
  holiday: 'brand',
  sick: 'correct',
  other: 'accent'
}

export default class Leave extends Model {
  @computed
  get employee (): Employee {
    return employees.relatedTo(this)
  }

  type (): Type {
    return types[this.get('type')]
  }

  isPending (): boolean {
    return _.isNull(this.get('approved'))
  }

  isApproved (): boolean {
    return this.get('approved')
  }

  isRejected (): boolean {
    return !this.isPending() && !this.isApproved()
  }
}
