import vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './styles/main.scss'

vue.config.produtionTip = false

new vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
