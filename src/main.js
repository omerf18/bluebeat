import vue from 'vue'
import app from './app.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import './styles/main.scss'

vue.config.productionTip = false
vue.use(element)

new vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app')
