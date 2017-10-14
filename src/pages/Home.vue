<template>
  <div>
    <Navbar title="Pre Order List" />
    <div class="home--card-container">
      <order-card @cardOnClick="goTo" v-for="(preOrder, key) in preOrders" :preOrder="preOrder" :key="key"></order-card>
    </div>

    <!-- <router-link to="/newpreorder" class=""><h1 class="title is-1">+ Pre Order</h1></router-link>
    <br>

    <a @click="logout"><h1 class="title is-1">Logout</h1></a> -->
  </div>
</template>

<script>
import OrderCard from './OrderCard'
import Navbar from './Navbar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  components: {
    OrderCard,
    Navbar
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
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.home--card-container {
  float: left;
  width: 100%;
  overflow: auto;
  height: calc(100vh - 60px);
  padding-bottom: 15px;
}
</style>
