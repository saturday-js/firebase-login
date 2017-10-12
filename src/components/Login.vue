<template lang="html">
  <div class="">
    <div v-if="!isReady" class="">
      Loading...
    </div>
    <button v-else class="button" @click="login()">login</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isReady'])
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>

<style lang="css">
</style>
