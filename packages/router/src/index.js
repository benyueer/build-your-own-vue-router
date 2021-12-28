/* eslint-disable */
import install from "./install"
import createMatcher from './create-matcher'
import Html5History from './history/history'

/**
 * VueRouter类
 */
export default class MyVueRouter {
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
      mode = 'history'
    }
    this.mode = mode

    this.matcher = createMatcher(this, options.routes)

    // switch (this.mode) {
      // case 'hash':
      //   // this.history = new HashHistort(this, options.base, this.fallback)
      //   break
      // case 'history':
        this.history = new Html5History(this, options.routes)

        this.history.setUpListeners()
    // }
  }

  push(location) {
    this.history.push(location)
  }

  match(location) {
    return this.matcher.match(location)
  }

  init(vm) {
    this.app = vm
    const location = window.location.pathname
    this.history.push(location)

    this.history.listen((route) => {
      this.app._route = route
    })
  }
}

MyVueRouter.install = install