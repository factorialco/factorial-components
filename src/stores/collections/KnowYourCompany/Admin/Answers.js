// @flow
import { Collection } from 'mobx-rest'
import { Answer } from 'stores/models/KnowYourCompany/Admin'

class Answers<T: Answer> extends Collection<T> {
  url (): string {
    return `/kyc/admin/answers`
  }

  model (): Class<Answer> {
    return Answer
  }
}

const singleton: Answers<Answer> = new Answers()
export default singleton
