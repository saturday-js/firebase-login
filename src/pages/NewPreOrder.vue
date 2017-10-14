<template lang="html">
  <div>
    <Navbar title="Create Pre Order"/>
    <div class="new-preorder--container">
      <h1 class="subtitle is-2">Pre Order</h1>
      <div class="field">
        <label class="label">Restaurant / Shop</label>
        <p class="control">
          <input v-model="formData.restaurantName" class="input is-large" type="text" placeholder="">
        </p>
      </div>

      <div class="field">
        <label class="label">
          Recommend Menu
        </label>
        <div v-for="(menu, index) in formData.menus" class="field has-addons">
          <p class="control">
            <input v-model="menu.menu" class="input is-large" type="text" placeholder="">
          </p>
          <!-- <p v-if="menu.menu !== '' && index < formData.menus.length - 1" class="control">
            <a @click="removeMenuAtIndex(index)" class="button is-large is-danger">
              <b-icon icon="close"></b-icon>
            </a>
          </p>
          <p v-if="menu.menu !== '' && index === formData.menus.length - 1" class="control">
            <a @click="addMoreMenu" class="button is-large">
              <b-icon icon="add"></b-icon>
            </a>
          </p> -->
        </div>
      </div>

      <br>

      <a @click="createPreOrder(formData)" class="button is-large is-success">Create</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './Navbar'

export default {
  data () {
    return {
      formData: {
        restaurantName: '',
        menus: [{
          menu: ''
        }]
      }
    }
  },
  methods: {
    ...mapActions([
      'createPreOrder'
    ]),
    addMoreMenu () {
      this.formData.menus.push({menu: ''})
    },
    removeMenuAtIndex (index) {
      this.formData.menus.splice(index, 1)
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
.new-preorder--container {
  float: left;
  width: 100%;
  padding: 25px;
  font-family: 'Amaranth', sans-serif;
}
</style>
