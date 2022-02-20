import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import VModal from 'vue-js-modal'

Vue.use(Vuelidate)
Vue.use(VModal)
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false } })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
