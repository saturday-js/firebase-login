<template>
  <div>
    <Navbar title="Pre Order List" />
    <b-tabs v-model="activeTab" style="float: left;width: 100%;" expanded>
      <b-tab-item label="Active">
        <div class="home--card-container" :class="{'home--empty': !activePreorder.length}">
          <order-card @cardOnClick="goTo" v-for="(preOrder, key) in activePreorder" :preOrder="preOrder" :key="key"></order-card>
          <i v-if="!activePreorder.length" class="material-icons" style="font-size: 125px;color: #fff;">inbox</i>
          <div style="color: #fff;" v-if="!activePreorder.length">Empty</div>
        </div>
      </b-tab-item>
      <b-tab-item label="History">
        <div class="home--card-container" :class="{'home--empty': !inActivePreorder.length}">
          <order-card @cardOnClick="goTo" v-for="(preOrder, key) in inActivePreorder" :preOrder="preOrder" :key="key"></order-card>
          <i v-if="!inActivePreorder.length" class="material-icons" style="font-size: 125px;color: #fff;">inbox</i>
          <div style="color: #fff;" v-if="!inActivePreorder.length">Empty</div>
        </div>
      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import OrderCard from './OrderCard'
import Navbar from './Navbar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      activeTab: 0
    }
  },
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
    ]),
    activePreorder () {
      return this.preOrders.filter((p) => p.status === 'open')
    },
    inActivePreorder () {
      console.log(this.preOrders.filter((p) => p.status !== 'open'))
      return this.preOrders.filter((p) => p.status !== 'open')
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
  padding-bottom: 15px;
}
.home--empty {
  text-align: center;
  padding-top: 30vh;
  opacity: 0.7;
  font-family: 'Amaranth', sans-serif;
}
</style>
