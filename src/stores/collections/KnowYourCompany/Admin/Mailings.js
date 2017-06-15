// @flow
import { Collection } from 'mobx-rest'
import { Mailing } from 'stores/models/KnowYourCompany/Admin'

class Mailings<T: Mailing> extends Collection<T> {
  url (): string {
    return `/kyc/admin/mailings`
  }

  model (): Class<Mailing> {
    return Mailing
  }
}

const singleton: Mailings<Mailing> = new Mailings()
export default singleton
