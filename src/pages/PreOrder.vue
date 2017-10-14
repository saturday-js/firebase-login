<template lang="html">
  <div class="">
    <Navbar title="Pre Order" />
    <div v-if="preOrder.restaurantName">
      <order-card :preOrder="preOrder"></order-card>
      <div class="preorder-close-order-container" v-if="isOwner && preOrder.status === 'open'" >
        <button @click="closeOrder()" class="button is-danger">Close this pre order</button>
      </div>
      <div class="preorder-tab-container">
        <b-tabs v-model="activeTab" style="float: left;width: 100%;" expanded>
          <b-tab-item label="Order" v-if="preOrder.status === 'open'">
            <div v-for="(menu, index) in preOrder.menus">
              <menu-amount :menu="menu" :index="index" view="edit"></menu-amount>
            </div>
            <div class="column">
              <div class="field">
                <br>
                <label class="label">
                  Other Menu
                </label>
                <p class="control">
                  <input v-model="formData.menu" @keyup.enter="addOtherMenu(formData)" class="preorder-input-menu input is-large" type="text">
                  <a @click="addOtherMenu(formData)" class="button is-success is-large">Add</a>
                </p>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="Detail">
            <div v-if="calSum(preOrder) !== 0">
              <div v-for="(menu, index) in preOrder.menus">
                <menu-amount :menu="menu" :index="index" view="detail"></menu-amount>
              </div>
            </div>
            <div v-else>
              Not have order.
            </div>
          </b-tab-item>
          <b-tab-item label="Summary">
            <div v-if="calSum(preOrder) !== 0">
              <div v-for="(menu, index) in preOrder.menus">
                  <menu-amount :menu="menu" :index="index" view="summary"></menu-amount>
              </div>
            </div>
            <div v-else>
              Not have order.
            </div>
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar'
import OrderCard from './OrderCard'
import MenuAmount from './MenuAmount'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      activeTab: 0,
      formData: {
        menu: ''
      }
    }
  },
  components: {
    MenuAmount,
    OrderCard,
    Navbar
  },
  created () {
    this.bindPreOrderRef(this.$route.params.id)
  },
  computed: {
    ...mapGetters([
      'user',
      'preOrder'
    ]),
    isOwner () {
      return this.preOrder.createBy.uid === this.user.uid
    }
  },
  methods: {
    ...mapActions([
      'bindPreOrderRef',
      'addOtherMenu',
      'confirmCloseOrder',
      'reCloseOrder'
    ]),
    closeOrder () {
      this.$dialog.confirm({
        message: 'Are you sure ?',
        onConfirm: () => this.confirmCloseOrder()
      })
    },
    calSum (preOrder) {
      if (preOrder.menus) {
        return Object.keys(preOrder.menus).reduce((sum, menuKey) => {
          let menu = preOrder.menus[menuKey]
          if (!menu.whos) return sum
          return sum + Object.keys(menu.whos).reduce((sum, key) => {
            return sum + menu.whos[key].amount
          }, 0)
        }, 0)
      } else {
        return 0
      }
    },
    curretUrl () {
      return window.location.href
    }
  }
}
</script>

<style scoped>
.preorder-tab-container {
  float: left;
  width: 100%;
  padding: 15px;
}
.preorder-input-menu {
  float: left;
  width: 250px;
  margin-right: 20px;
}
.preorder-close-order-container {
  float: left;
  width: 100%;
  text-align: center;
  padding: 15px;
}
</style>
