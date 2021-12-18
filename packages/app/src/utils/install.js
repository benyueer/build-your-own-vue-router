export default {
  install(Vue) {
    Vue.mixin({
      mounted() {
        console.log(123, this)
      }
    })
  }
}