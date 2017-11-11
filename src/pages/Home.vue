<template>
  <div>
    <div>
      {{ user }}
      {{ userProfile }}
    </div>
    Hi
    Hola
    Jambo
    Bonjour
    Hallo
    Nín hǎo
    Hei
    Annyeonghaseyo
    Ahoj
    Kon’nichiwa
    Zdravo
    Labas
    Merhaba
    Olá
    Helo
    Ahoy
    Alo
    Hej
    Dia duit
    Halló
    G’Day Mate
    Sawubona
    Hallo
    Zdravo
    Ciao
    Hallå
    Alo
    Përshëndetje
    Aloha
    Privet
    Kumusta
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
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
