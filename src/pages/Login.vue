<template lang="html">
  <div class="login--container">
    <div v-if="!isReady" class="">
      Loading...
    </div>
    <div v-else>
      <button class="button" @click="login()">login</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isReady'
    ])
  },
  methods: {
    ...mapActions([
      'login'
    ])
  }
}
</script>

<style scoped>
.login--container {
  float: left;
  width: 100%;
  background-color: #fff;
}
</style>
