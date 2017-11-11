<template>
  <div>
    <div>
      {{ user }}
    </div>
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
