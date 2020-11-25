import vue from 'vue'
import vueRouter from 'vue-router'
import beatHome from '../views/beatHome.vue'
import beatApp from '../views/beatApp.vue'
import beatDetails from '../views/beatDetails.vue'
import beatAdd from '../views/beatAdd.vue'

vue.use(vueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: beatHome
  },
  {
    path: '/app',
    name: 'beatapp',
    component: beatApp
  },
  {
    path: '/beat',
    name: 'beatDetails',
    component: beatDetails
  },
  {
    path: '/app/add',
    name: 'beatAdd',
    component: beatAdd
  },
]

const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
