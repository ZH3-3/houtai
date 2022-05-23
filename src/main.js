import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI, { Message, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from 'axios'


Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm


if (process.env.NODE_ENV === 'development') require('@/api/mock')

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  }
  else if (token && to.name === 'login') {
    next({ name: 'home' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    store.commit("addMenu", router)
  }
}).$mount('#app')
