import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import counter from './counter'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    counter
  },
  strict: debug
})
