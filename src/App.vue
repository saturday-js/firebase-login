<template>
  <div class="container is-fluid layout-default--container" id="app">
    <div class="column is-4 is-offset-4 layout-default--column">
      <router-view></router-view>
    </div>
  </div>
  <!-- <div id="app">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-4 is-offset-4">
              <div v-if="$route.name !== 'Login'">
                <span v-if="$route.name === 'Home'">
                  <img src="./assets/svg/home.svg" alt="" width="40px">
                </span>
                <span v-else @click="goBack()" class="is-pointer">
                  <img src="./assets/svg/return.svg" alt="" width="40px">
                </span>
                <br>
                <br>
                <br>
              </div>
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: {
    team () {
      if (this.userProfile && this.userProfile.customProfile) {
        return this.userProfile.customProfile.team
      }
    },
    ...mapGetters(['userProfile'])
  },
  methods: {
    ...mapActions([
      'init'
    ]),
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style>
body {
  min-height: 100vh;
}
a {
   outline: 0;
   user-select: none;
   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
* {
  box-sizing: border-box;
}
/* .profile-picture {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
.team-sellsuki {
  color: #3273DC;
}
.team-flyingcomma {
  color: #fccd15;
}
.is-pointer {
  cursor: pointer;
  outline: 0;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
} */
</style>

<style scoped>
.layout-default--container {
  margin-left: 0 !important;
  margin-right: 0 !important;
  min-height: 100vh;
  float: left;
  width: 100% !important;
}
.layout-default--column {
  float: left;
  padding: 0;
}
</style>
