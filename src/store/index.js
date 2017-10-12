import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'
import router from '../router'

let config = {
  apiKey: 'AIzaSyCRwgWRdIUz3eILS_uI-JGktIK6cs0wAKY',
  authDomain: 'rorder-123.firebaseapp.com',
  databaseURL: 'https://rorder-123.firebaseio.com',
  projectId: 'rorder-123',
  storageBucket: '',
  messagingSenderId: '891671971153'
}
firebase.initializeApp(config)

let db = firebase.database()
let preOrdersRef = db.ref('preorders').orderByChild('status').equalTo('open')

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    isReady: false,
    user: {},
    userProfile: {},
    preOrders: [],
    preOrder: {}
  },
  getters: {
    user: state => state.user,
    route: state => state.route,
    isReady: state => state.isReady,
    userProfile: state => state.userProfile,
    preOrders: state => state.preOrders,
    preOrder: state => state.preOrder
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
          dispatch('bindPreOrdersRef')

          db.ref('contacts/' + profile.uid).once('value').then((snapshot) => {
            if (!snapshot.val()) {
              console.log(snapshot.val())
              router.push('/')
            } else {
              if (window.location.pathname === '/login') {
                router.push('/')
              }
              router.push(window.location.pathname)
            }
            commit('setReady')
          })
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
    bindPreOrderRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }, key) => {
      bindFirebaseRef('preOrder', db.ref('preorders').child(key))
    }),
    bindPreOrdersRef: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('preOrders', preOrdersRef)
    }),
    changeUserOrderMenuAmount ({ commit, state }, payload) {
      if (payload.newAmount > 0) {
        db.ref('preorders')
          .child(state.preOrder['.key'])
          .child('menus')
          .child(payload.index)
          .child('whos')
          .child(state.user.uid)
          .set({
            user: state.user,
            amount: payload.newAmount
          })
      } else if (payload.newAmount === 0) {
        db.ref('preorders')
          .child(state.preOrder['.key'])
          .child('menus')
          .child(payload.index)
          .child('whos')
          .child(state.user.uid)
          .remove()
      }
    },
    updateProfile ({ commit, state }, formData) {
      let data = {
        ...state.user,
        customProfile: {...formData}
      }
      data.customProfile.emails = data.customProfile.emails.filter((item) => item.email !== '')
      db.ref('contacts/' + state.user.uid).set(data)
      router.push('/')
    },
    createPreOrder ({ commit, state }, formData) {
      let data = {
        status: 'open',
        restaurantName: formData.restaurantName,
        createBy: state.user,
        style: Math.floor((Math.random() * 5) + 1)
        // menus: formData.menus.map(menu => {
        //   return {
        //     status: '',
        //     menu: menu.menu,
        //     price: 0
        //     // whos: {
        //     //   uid: {
        //     //     user: state.user,
        //     //     amount: 1
        //     //   }
        //     // }
        //   }
        // })
      }
      let menus = formData.menus.map(menu => {
        return {
          status: '',
          menu: menu.menu,
          price: 0
          // whos: {
          //   uid: {
          //     user: state.user,
          //     amount: 1
          //   }
          // }
        }
      })
      db.ref('preorders').push(data).then((data) => {
        menus.forEach(menu => {
          db.ref('preorders')
            .child(data.key)
            .child('menus')
            .push(menu)
        })
        router.push('/preorder/' + data.key)
      })
    },
    addOtherMenu ({ commit, state }, payload) {
      if (payload.menu && payload.menu.trim() !== '') {
        db.ref('preorders')
          .child(state.preOrder['.key'])
          .child('menus')
          .push({
            menu: payload.menu,
            price: 0,
            status: ''
          })
      }
      payload.menu = ''
    },
    removeMenu ({ commit, state }, payload) {
      db.ref('preorders')
        .child(state.preOrder['.key'])
        .child('menus')
        .child(payload)
        .remove()
    }
  },
  strict: debug
})
