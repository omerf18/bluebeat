import vue from 'vue'
import vuex from 'vuex'
import {beatStore} from './beatStore.js'
import {songStore} from './songStore.js'
<<<<<<< HEAD

import VueYoutube from 'vue-youtube'
 
vue.use(VueYoutube)

=======
import {userStore} from './userStore.js'
>>>>>>> dbdaeee3f8b38a8d921f48e640f1521fc4f6d15c

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
