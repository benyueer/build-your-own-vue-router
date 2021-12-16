import Vue from 'vue'
import App from './App.vue'
import test1 from './components/test1'
import defIns from './utils/install'

Vue.config.productionTip = false
Vue.use(defIns)
Vue.component('test1', test1)

const app = new Vue({
  render: h => h(App),
  qwe: 123
})
  
// app.use(default)
app.$mount('#app')
