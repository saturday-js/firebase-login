import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import NewPreOrder from '@/pages/NewPreOrder'
import PreOrder from '@/pages/PreOrder'
import Login from '@/pages/Login'
import PendingPage from '@/pages/PendingPage'

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
