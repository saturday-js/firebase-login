<template>
  <div>
    <div class="home--header">
      <i class="material-icons home--back-icon" @click="goBack">keyboard_backspace</i>
      <span>{{title}}</span>
      <i class="material-icons home--home-icon" @click="logout">lock_outline</i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'navbar',
  props: ['title'],
  methods: {
    ...mapActions({
      logout: 'logout'
    }),
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
</style>
