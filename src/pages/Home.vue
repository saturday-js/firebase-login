<template>
  <div>
    <div>
      {{ user }}
      {{ userProfile }}
    </div>
    <div>
      <h2 v-for="hi in his">{{ hi }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      his: [
        'Hi',
        'Hola',
        'Jambo',
        'Bonjour',
        'Hallo',
        'Nín hǎo',
        'Hei',
        'Annyeonghaseyo',
        'Ahoj',
        'Kon’nichiwa',
        'Zdravo',
        'Labas',
        'Merhaba',
        'Olá',
        'Helo',
        'Ahoy',
        'Alo',
        'Hej',
        'Dia duit',
        'Halló',
        'G’Day Mate',
        'Sawubona',
        'Hallo',
        'Zdravo',
        'Ciao',
        'Hallå',
        'Alo',
        'Përshëndetje',
        'Aloha',
        'Privet',
        'Kumusta'
      ]
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'userProfile'
    ])
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
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
