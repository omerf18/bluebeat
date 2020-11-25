import vue from 'vue'
import vuex from 'vuex'
import beatStore from './beatStore.js'

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
  }
})
