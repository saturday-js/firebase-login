<template lang="html">
  <div>
    <div v-if="view === 'edit'">
      <table width="100%">
        <tr>
          <td>
            <span class="subtitle is-4">
              {{ menuName }}
            </span>
            <span class="subtitle is-4">
              ({{ sum }})
            </span>
          </td>
          <td width="130px">
            <div style="float: right;">

              <button v-if="sum > 0" @click="changeAmount(-1)" class="button">-</button>
              <button v-else @click="removeMenuFromPreOrder(index)" class="button">
                <b-icon icon="delete" type="is-danger"></b-icon>
              </button>

              <span class="subtitle is-4">&nbsp;&nbsp;{{ userAmount }}&nbsp;&nbsp;</span>
              <button @click="changeAmount(1)" class="button">+</button>
            </div>
          </td>
        </tr>
      </table>




      <hr>
    </div>

    <div v-else-if="view === 'detail' && sum > 0">
      <span class="subtitle is-4">
        {{ menuName }}
      </span>
      <span class="subtitle is-4">
        ({{ sum }})
      </span>

      <br>

      <div v-for="user in menu.whos" class="">
        <span>{{ user.user.displayName }}</span>
        <span style="float: right;">{{ user.amount }}</span>
      </div>

      <hr>
    </div>

    <div v-else-if="sum > 0">
      <table width="100%">
        <tr>
          <td>
            <span class="subtitle is-4">
              {{ menuName }}
            </span>
          </td>
          <td width="100px">
            <span class="subtitle is-4" style="float: right;">
              {{ sum }}
            </span>
          </td>
        </tr>
        <!-- <tr>
          <td colspan="2">
            <span v-for="user in menu.whos">
              <img :src="user.user.fb.photoURL" alt="" class="user-img">
            </span>
          </td>
        </tr> -->
      </table>

      <hr>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['menu', 'index', 'view'],
  computed: {
    ...mapGetters([
      'user'
    ]),
    menuName () {
      return this.menu.menu
    },
    userAmount () {
      return (this.menu.whos && this.menu.whos[this.user.uid]) ? this.menu.whos[this.user.uid].amount : 0
    },
    sum () {
      return (this.menu.whos) ? Object.keys(this.menu.whos).reduce((sum, key) => {
        return sum + this.menu.whos[key].amount
      }, 0) : 0
    }
  },
  methods: {
    ...mapActions([
      'changeUserOrderMenuAmount',
      'removeMenu'
    ]),
    changeAmount (val) {
      let payload = {
        oldAmount: this.userAmount,
        newAmount: this.userAmount + val,
        index: this.index
      }
      this.changeUserOrderMenuAmount(payload)
    },
    removeMenuFromPreOrder (index) {
      this.$dialog.confirm({
        message: 'Are you sure you want to <strong>delete</strong> this menu?<br/>This action cannot be undone.',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.removeMenu(index)
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
.user-img {
  width: 20px;
  height: 20px;
  border-radius: 10px;
}
</style>
