// @flow
import VariableCompensation from 'stores/models/VariableCompensation'
import { Collection } from 'mobx-rest'

export class VariableCompensations<T: VariableCompensation> extends Collection<
  T
> {
  url (): string {
    return `/variable_compensations`
  }

  model (): Class<VariableCompensation> {
    return VariableCompensation
  }
}

const singleton: VariableCompensations<VariableCompensation> = new VariableCompensations()
export default singleton
