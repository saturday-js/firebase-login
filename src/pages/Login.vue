<template lang="html">
  <div>
    <div class="login--container">
      <div class="login--section-top">
        <div class="login--header">
          Rorder
        </div>
        <div class="login--title">
          Welcome to Rorder
        </div>
        <div class="login--content">
          Online ordering food or drink built just for your comfortable.
        </div>
      </div>
      <div class="login--section-bottom" v-if="isReady">
        <button class="login--button" @click="login()">
          Login with Facebook
        </button>
        <div class="login--content">
          By signing up, I agree To Rorder Terms and Condition. (Actualy not have)
        </div>
      </div>
      <div class="login--section-bottom" v-else>
        <div class="login--title">
          Loading...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isReady'])
  },
  methods: {
    ...mapActions({
      login: 'login'
    })
  }
}
</script>

<style scoped>
.login--container {
  float: left;
  width: 100%;
  height: 100vh;
}
.login--header {
  font-family: 'Lobster', cursive;
  font-size: 90px;
  text-align: center;
  color: #fff;
}
.login--title {
  font-family: 'Lobster', cursive;
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding-bottom: 5px;
}
.login--content {
  font-family: 'Lobster', cursive;
  text-align: center;
  color: #fff;
  font-size: 14px;
  padding: 0 35px;
}
.login--section-top {
  float: left;
  width: 100%;
}
.login--section-bottom {
  margin-top: calc(100vh - 218px - 162px);
  float: left;
  width: 100%;
  text-align: center;
  padding-bottom: 30px;
}
.login--button {
  border-radius: 5px;
  margin-bottom: 30px;
  width: 300px;
  background-color: transparent;
  border: 2px solid #fff;
  height: 60px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.login--button:hover {
  color: #fff;
}
</style>
