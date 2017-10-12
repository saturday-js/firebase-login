import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewPreOrder from '@/components/NewPreOrder'
import PreOrder from '@/components/PreOrder'
import Login from '@/components/Login'
import PendingPage from '@/components/PendingPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newpreorder',
      name: 'NewPreOrder',
      component: NewPreOrder
    },
    {
      path: '/preorder/:id',
      name: 'PreOrder',
      component: PreOrder
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/pending',
      name: 'PendingPage',
      component: PendingPage
    }
  ]
})
