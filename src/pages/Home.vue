<template>
  <div>
    <div>
      {{ user }}
    </div>
    <a @click="logout"><h1 class="title is-1">Logout</h1></a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  }
}
</script>

<style scoped>
</style>
