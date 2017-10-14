<template>
  <div class="container is-fluid layout-default--container" id="app">
    <div class="column is-4 is-offset-4 layout-default--column background-1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      randomNumber: parseInt(Math.random() * 10)
    }
  },
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
  width: 100%;
  padding: 0;
  min-height: 100vh;
}
.background-1 {
  background-image:linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
}
</style>
