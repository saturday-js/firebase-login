import firebaseConfig from '../../firebase.config.js'
import firebase from 'firebase'
import router from '../router'

// Your firebase config
let config = firebaseConfig

firebase.initializeApp(config)

export default {
  state: {
    isReady: false,
    user: {}
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    init ({ commit, dispatch, bindFirebaseRef }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          let { displayName, uid } = user
          let profile = {
            displayName,
            uid,
            fb: user.providerData[0]
          }
          commit('setUser', profile)
          router.push('/')
        } else {
          commit('setUser', null)
          router.push('/login')
          commit('setReady')
        }
      })
    },
    login () {
      let provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      firebase.auth().signOut()
    }
  }
}
