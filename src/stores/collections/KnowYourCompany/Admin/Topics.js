// @flow
import { Collection } from 'mobx-rest'
import { Topic } from 'stores/models/KnowYourCompany/Admin'

class Topics<T: Topic> extends Collection<T> {
  url (): string {
    return `/kyc/admin/topics`
  }

  model (): Class<Topic> {
    return Topic
  }
}

const singleton: Topics<Topic> = new Topics()
export default singleton
