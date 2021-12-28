import link from "./components/link";
import view from "./components/view";

export default function install(Vue) {

  Vue.component('MyRouterLink', link)
  Vue.component('MyRouterView', view)

  const isDef = (_) => _ !== undefined

  Vue.mixin({
    beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this
        this._router = this.$options.router
        this._router.init(this)
        // this.ro
        Vue.util.defineReactive(this, '_route', this._router.history.current)
        // this._route = this._router.history.current
        // this.$set(this, '_route', this._router.history.current)
      }
      this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get() { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      // return this.$router.history.current
      return this._routerRoot._route
    }
  })
}