import install from "./install"
import createMatcher from './create-matcher'

/**
 * VueRouter类
 */
export default class VueRouter {
  static install
  static version

  app
  options
  mode
  history
  fallback

  constructor(options = {}) {
    this.app = null
    this.options = options
    let mode = options.mode || 'hash'
    this.fallback = !!options.fallback
    if (this.fallback) {
      mode = 'hash'
    }
    this.mode = mode

    this.matcher = createMatcher(this, options.routes)

    switch (this.mode) {
      case 'hash':
        // this.history = new HashHistort(this, options.base, this.fallback)
        break
      case 'history':
        this.history = new Html5History(this, options.routes)
    }
  }

  push(location) {
    this.history.push(location)
  }
}

VueRouter.install = install