<template>
  <div>

    <order-card @cardOnClick="goTo" v-for="(preOrder, key) in preOrders" :preOrder="preOrder" :key="key"></order-card>

    <router-link to="/newpreorder" class=""><h1 class="title is-1">+ Pre Order</h1></router-link>
    <br>

    <a @click="logout"><h1 class="title is-1">Logout</h1></a>
  </div>
</template>

<script>
import OrderCard from './OrderCard'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    OrderCard
  },
  computed: {
    ...mapGetters([
      'user',
      'userProfile',
      'contacts',
      'preOrders'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
    goTo (path) {
      this.$router.push('/preorder/' + path)
    }
  }
}
</script>

<style scoped>

</style>
