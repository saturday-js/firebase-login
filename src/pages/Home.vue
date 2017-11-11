<template>
  <div>
    <div>
      <img :src="user.fb && user.fb.photoURL" class="photo-url" alt="">
      <br>
      <h2 class="subtitle">{{user.displayName}}</h2>

      <button class="button is-pramary" @click="inserFakePost('oooo')">Fake</button>

      <hr>

      <input v-model="newPostInput" type="text" class="input" @keyup.enter="submitPost">

      <hr>

      <div v-for="post in posts" :key="post['.key']">
        <!-- {{post['.key']}} -->
        <h2 class="subtitle">
          {{post.msg}}
        </h2>
        <p>
          - <router-link :to="`/profile/${post.user.id}`">{{post.user.name}}</router-link>
        </p>
        <hr>
      </div>
      
    </div>
    <br><br><br>
    <a @click="logout"><h1 class="title is-1">Logout</h1></a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      newPostInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'setPostRef',
      'unSetPostRef',
      'insertPost',
      'inserFakePost'
    ]),
    submitPost () {
      this.insertPost(this.newPostInput)
    }
  },
  created () {
    this.setPostRef()
  },
  destroyed () {
    this.unSetPostRef()
  }
}
</script>

<style scoped>
.photo-url {
  width: 48px;
  height: 48px;
  border-radius: 24px;
}
</style>
