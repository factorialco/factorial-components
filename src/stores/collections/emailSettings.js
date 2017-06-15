// @flow
import { computed } from 'mobx'
import EmailSetting from 'stores/models/EmailSetting'
import { Collection } from 'mobx-rest'

class EmailSettings<T: EmailSetting> extends Collection<T> {
  url (): string {
    return '/access_email_settings'
  }

  model (): Class<EmailSetting> {
    return EmailSetting
  }

  @computed
  get current (): EmailSetting {
    return this.models[0]
  }
}

const singleton: EmailSettings<EmailSetting> = new EmailSettings()

export { EmailSettings }
export default singleton
