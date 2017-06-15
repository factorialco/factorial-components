// @flow
import Feature from 'stores/models/Feature'
import { Collection } from 'mobx-rest'

class Features<T: Feature> extends Collection<T> {
  url (): string {
    return `/features`
  }

  model (): Class<Feature> {
    return Feature
  }
}

const singleton: Features<Feature> = new Features()

export default singleton
