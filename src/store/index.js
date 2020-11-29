import vue from 'vue'
import vuex from 'vuex'
<<<<<<< HEAD
import { beatStore } from './beatStore.js'
import { songStore } from './songStore.js'
import { userStore } from './userStore.js'
import VueYoutube from 'vue-youtube'
=======
import {beatStore} from './beatStore.js'
import {songStore} from './songStore.js'

import {userStore} from './userStore.js'
import VueYoutube from 'vue-youtube'
 
vue.use(VueYoutube)

>>>>>>> b8665dd553dfd4ed11ee1f134aa816fb1795dbac

vue.use(VueYoutube)
vue.use(vuex)

export default new vuex.Store({
  strict: true,
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    beatStore,
    songStore,
    userStore
  }
})
