import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebaseConfig from '../../firebase.config.js'
import firebase from 'firebase'
import router from '../router'

// Your firebase config
let config = firebaseConfig

firebase.initializeApp(config)

let db = firebase.database()
let postsRef = db.ref('twitter/posts')

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isReady: false,
    user: {},
    posts: [],
    userProfile: {}
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady,
    posts: state => state.posts,
    userProfile: state => state.userProfile
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    },
    setUser (state, user) {
      state.user = user
    },
    ...firebaseMutations
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
    },
    async insertPost (store, msg) {
      let newPost = {
        msg: msg,
        user: {
          id: store.state.user.uid,
          name: store.state.user.displayName
        }
      }
      let data = await postsRef.push(newPost)
      console.log(data.key)

      let userPost = db.ref('twitter/users/' + store.state.user.uid + '/posts/' + data.key)
      userPost.set({
        msg
      })
      // userPosts.push()
    },
    async inserFakePost (store, msg) {
      let newPost = {
        msg: msg,
        user: {
          id: 'anv5aLz8k2dL6tHZcrQcy1OjAcG3',
          name: 'Nuttakit Jamanu'
        }
      }
      let data = await postsRef.push(newPost)
      console.log(data.key)

      let userPost = db.ref('twitter/users/anv5aLz8k2dL6tHZcrQcy1OjAcG3/posts/' + data.key)
      userPost.set({
        msg
      })
      // userPosts.push()
    },
    setPostRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      // this will unbind any previously bound ref to 'todos'
      console.log('setPostRef')
      bindFirebaseRef('posts', postsRef)
    }),
    unSetPostRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      // you can unbind it easily too
      console.log('unSetPostRef')
      unbindFirebaseRef('posts')
    }),
    //
    setUserProfileRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, id) => {
      // this will unbind any previously bound ref to 'todos'
      let userProfile = db.ref('twitter/users/' + id)
      bindFirebaseRef('userProfile', userProfile)
    }),
    unSetUserProfileRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      // you can unbind it easily too
      unbindFirebaseRef('userProfile')
    })
  },
  strict: debug
})
