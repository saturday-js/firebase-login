<template>
  <div>
    <div class="navbar--header">
      <i v-if="$route.name !== 'Home'" class="material-icons navbar--back-icon" @click="goBack">keyboard_backspace</i>
      <router-link to="/newpreorder" v-else style="color: #fff;">
        <i class="material-icons navbar--add-icon">add</i>
      </router-link>
      <span>{{title}}</span>
      <b-dropdown class="navbar--dropdown-right">
        <a class="navbar-item" slot="trigger">
          <i class="material-icons navbar--home-icon">list</i>
        </a>
        <b-dropdown-item>
          <router-link to="/newpreorder" class="">
            <span style="color: #4a4a4a">+ Pre Order</span>
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item  @click="reportBug">
          <span>Bug Report</span>
        </b-dropdown-item>
        <b-dropdown-item  @click="logout">
          <span>Sign out</span>
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  props: ['title'],
  methods: {
    ...mapActions([
      'logout'
    ]),
    goBack () {
      this.$router.go(-1)
    },
    reportBug () {
      window.open('https://github.com/Sellsuki/rorder/issues/new', '_blank')
    }
  }
}
</script>

<style scoped>
.navbar--header {
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
.navbar--back-icon {
  position: absolute;
  left: 10px;
  font-size: 35px;
  cursor: pointer;
}
.navbar--add-icon {
  position: absolute;
  left: 10px;
  font-size: 35px;
  cursor: pointer;
}
.navbar--home-icon {
  position: absolute;
  right: 10px;
  font-size: 35px;
  color: #fff;
  top: 0;
  cursor: pointer;
}
.navbar--dropdown-right {
  position: absolute;
  right: 10px;
}
</style>
