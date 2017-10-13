<template>
  <div>
    <div class="home--header">
      <i class="material-icons home--back-icon" @click="goBack">keyboard_backspace</i>
      <span>Pre Order List</span>
      <i class="material-icons home--home-icon" @click="logout">lock_outline</i>
    </div>
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
    },
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
.home--header {
  float: left;
  width: 100%;
  height: 60px;
  padding-top: 12px;
  text-align: center;
  font-family: 'Amaranth', sans-serif;
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  position: relative;
}
.home--back-icon {
  position: absolute;
  left: 10px;
  font-size: 35px;
}
.home--home-icon {
  position: absolute;
  right: 10px;
  font-size: 35px;
}
.home--card-container {
  float: left;
  width: 100%;
  overflow: auto;
  height: calc(100vh - 60px);
  padding-bottom: 15px;
}
</style>
