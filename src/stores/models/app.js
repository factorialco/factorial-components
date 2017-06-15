// @flow
import { observable, action } from 'mobx'
import type { Flash } from 'components/Flash/types'

class App {
  @observable flash: ?Flash = null

  @action
  setFlash (flash: ?Flash) {
    this.flash = flash
    setTimeout(() => {
      this.flash = null
    }, 5 * 1000)
  }
}

const singleton = new App()

export default singleton
