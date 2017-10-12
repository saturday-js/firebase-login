<template>
  <div :class="'container is-fluid layout-default--container background-' + randomNumber" id="app">
    <div class="column is-4 is-offset-4 layout-default--column">
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
  /* background-image:linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%); */
}
.background-1 {
  background-image:linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
.background-2 {
  background-image:linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
}
.background-3 {
  background-image:radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
}
.background-4 {
  background-image:linear-gradient(180deg, #2af598 0%, #009efd 100%);
}
.background-5 {
  background-image:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.background-6 {
  background-image:linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
}
.background-7 {
  background-image:linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
}
.background-8 {
  background-image:linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);
}
.background-9 {
  background-image:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
.background-0 {
  background: -webkit-linear-gradient(top, #c94b4b, #4b134f);
}
</style>
