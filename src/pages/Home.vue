<template>
  <div>
    <div>
      {{ counter }}
      <button @click="incrementCounter" class="button is-primary">+</button>
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
      'counter'
    ])
  },
  methods: {
    ...mapActions([
      'logout',
      'bindCounterRef',
      'unbindCounterRef',
      'incrementCounter'
    ])
  },
  created () {
    this.bindCounterRef()
  },
  destroyed () {
    this.unbindCounterRef()
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
