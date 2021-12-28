import Vue from 'vue'
import MyVueRouter from '../../router/dist/router'
import App from './App.vue'
import test1 from './components/test1'
import router from './router'
// import defIns from './utils/install'

Vue.config.productionTip = false
// Vue.use(defIns)
Vue.component('test1', test1)
Vue.use(MyVueRouter)

const app = new Vue({
  render: h => h(App),
  qwe: 123,
  router
})
  
// app.use(default)
app.$mount('#app')
