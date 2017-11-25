import { firebaseMutations, firebaseAction } from 'vuexfire'
import firebase from 'firebase'

let db = firebase.database()
let counterRef = db.ref('counter')

export default {
  state: {
    counter: 0
  },
  getters: {
    counter: state => state.counter
  },
  mutations: {
    ...firebaseMutations
  },
  actions: {
    async setCounter (store, msg) {
      counterRef.set(10)
    },
    bindCounterRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      bindFirebaseRef('counter', counterRef)
    }),
    unbindCounterRef: firebaseAction(({ bindFirebaseRef, unbindFirebaseRef }) => {
      unbindFirebaseRef('counter')
    })
  }
}
