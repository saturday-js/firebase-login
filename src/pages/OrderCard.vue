<template lang="html">
  <div>
    <div class="card--container" v-if="preOrder">
      <div class="card--card" @click="cardOnClick()">
        <div class="card--half-box" style="text-align: center;">
          <img v-if="preOrder.createBy && preOrder.createBy.fb" :src="preOrder.createBy.fb.photoURL" class="card--user-img">
          <div style=" font-size: 21px;">{{ preOrder.createBy.displayName }}</div>
        </div>
        <div class="card--half-box">
          <div class="card--is-title">
            {{ preOrder.restaurantName }}
          </div>
          <div class="card--count-down">
            01 : 42 : 23
          </div>
          <div>
            Total Order: x {{ calSum(preOrder) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['preOrder', 'index'],
  methods: {
    cardOnClick () {
      this.$emit('cardOnClick', this.preOrder['.key'])
    },
    calSum (preOrder) {
      if (preOrder.menus) {
        return Object.keys(preOrder.menus).reduce((sum, menuKey) => {
          let menu = preOrder.menus[menuKey]
          if (!menu.whos) return sum
          return sum + Object.keys(menu.whos).reduce((sum, key) => {
            return sum + menu.whos[key].amount
          }, 0)
        }, 0)
      } else {
        return 0
      }
    }
  }
}
</script>

<style scoped>
.card--container {
  float:left;
  width: 100%;
  padding: 15px 15px 0 15px;
}
.card--card {
  border: 2px solid #fff;
  float: left;
  width: 100%;
  border-radius: 10px;
  padding: 15px;
  font-family: 'Amaranth', sans-serif;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  color: #fff;
}
.card--half-box {
  float: left;
  width: 50%;
}
.card--user-img {
  border-radius: 50%;
  width: 100px;
}
.card--is-title {
  font-size: 28px;
}
.card--count-down {
  font-size: 35px;
  padding: 10px 0;
}
</style>
