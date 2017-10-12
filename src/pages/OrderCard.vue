<template lang="html">
  <div @click="cardOnClick()" :class="'order gradient-' + preOrder.style">
    <h1 class="subtitle is-4">{{ preOrder.restaurantName }}</h1>
    <h2 class="order-count subtitle is-3">
      x {{ calSum(preOrder) }}
    </h2>
    <div class="created-by">
      <img v-if="preOrder.createBy && preOrder.createBy.fb" :src="preOrder.createBy.fb.photoURL" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['preOrder'],
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

<style lang="css" scoped>
.profile-picture {
  width: 46px;
  height: 46px;
  border-radius: 23px;
}
.order {
  outline: 0;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
  width: 100%;
  height: 130px;
  background: #FFF;
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 16px;
  cursor: pointer;
  /*transition: box-shadow 0.2s ease-in-out;*/
  transition: all 0.2s ease-in-out;
}
.order:hover {
  -webkit-box-shadow: 0px 10px 18px -9px rgba(0,21,56,0.43);
  -moz-box-shadow: 0px 10px 18px -9px rgba(0,21,56,0.43);
  box-shadow: 0px 10px 18px -9px rgba(0,21,56,0.43);
  -webkit-transform: scale(1.01, 1.01);
  transform: scale(1.01, 1.01);
}
.order .subtitle {
  color: #FFF;
  text-shadow: 0px 1px 16px rgba(0,21,56,0.43);
}
.created-by {
  opacity: 1;
  border-radius: 25px;
  border: 2px solid #FFF;
  overflow: hidden;
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 50px;
  height: 50px;
  transition: opacity 0.2s ease-in-out;
}
.order:hover .created-by {
  opacity: 1;
}

.order .order-count {
  position: absolute;
  left: 16px;
  bottom: 10px;
  margin: 0px;
}

.gradient-1 {
  background-image:linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.gradient-2 {
  background-image:linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
}
.gradient-3 {
  background-image:linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%);
}
.gradient-4 {
  background-image:linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
.gradient-5 {
  background-image:linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
}
</style>
