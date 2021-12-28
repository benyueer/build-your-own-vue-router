export default class {
  current
  router
  cb

  constructor(router) {
    this.router = router
  }

  listen(cb) {
    this.cb = cb
  }

  push(location) {
    window.history.pushState({}, '', location)

    const route = this.router.match(location)

    console.log('history push', route, location)

    this.updateRoute(route || {})

  }

  updateRoute(route) {
    this.current = route
    this.cb && this.cb(route)
  }

  setUpListeners() {
    window.addEventListener('popstate', () => {
      const location = window.location.pathname
      this.push(location)
    })
  }
}