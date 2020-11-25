import vue from 'vue'
import vueRouter from 'vue-router'
import beatHome from '../views/beatHome.vue'

vue.use(vueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: beatHome
  },
 // {
    // path: '/about',
    // name: 'About',
    // component: 
 // }
]

const router = new vueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
