// @flow
import { Collection } from 'mobx-rest'
import { Question } from 'stores/models/KnowYourCompany/Admin'

class Questions<T: Question> extends Collection<T> {
  url (): string {
    return `/kyc/admin/questions`
  }

  model (): Class<Question> {
    return Question
  }
}

const singleton: Questions<Question> = new Questions()
export default singleton
