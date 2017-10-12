<template lang="html">
  <div class="">
    <div v-if="preOrder.restaurantName">
      <order-card :preOrder="preOrder"></order-card>

      <b-radio-group v-model="view">
        <b-radio-button type="is-primary" value="edit">
          Order
        </b-radio-button>

        <b-radio-button type="is-primary" value="detail">
          Detail
        </b-radio-button>

        <b-radio-button type="is-primary" value="summary">
          Summary
        </b-radio-button>
      </b-radio-group>

      <br>

      <h1 class="subtitle is-3">{{ preOrder.restaurantName }}</h1>

      <hr>
      <div v-for="(menu, index) in preOrder.menus">
        <menu-amount :menu="menu" :index="index" :view="view"></menu-amount>
      </div>


      <div v-if="view === 'edit'" >
        <div class="field">
          <br>
          <label class="label">
            Other Menu
          </label>
          <p class="control">
            <input v-model="formData.menu" @keyup.enter="addOtherMenu(formData)" class="input is-large" type="text" placeholder="">
          </p>
        </div>

        <a @click="addOtherMenu(formData)" class="button is-success is-large">Add</a>
      </div>

      <div class="has-text-centered">
        <hr v-if="isOwner">
        <button v-if="isOwner" @click="closeOrder()" class="button is-danger">Close this order</button>
      </div>
      
    </div>
    <div v-else>
      Loading...
    </div>

  </div>
</template>

<script>
import OrderCard from './OrderCard'
import MenuAmount from './MenuAmount'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      view: 'edit',
      formData: {
        menu: ''
      }
    }
  },
  components: {
    MenuAmount,
    OrderCard
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
      'closeOrder'
    ])
  }
}
</script>

<style lang="css">
</style>
