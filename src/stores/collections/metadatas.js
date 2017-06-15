// @flow
import Metadata from 'stores/models/Metadata'
import { Collection } from 'mobx-rest'

export class Metadatas<T: Metadata> extends Collection<T> {
  url (): string {
    return `/metadatas`
  }

  model (): Class<Metadata> {
    return Metadata
  }
}

const singleton: Metadatas<Metadata> = new Metadatas()

export default singleton
