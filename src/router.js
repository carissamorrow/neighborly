import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'
// @ts-ignore
import UserDash from './views/UserDash.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/userDash',
      name: 'userDash',
      component: UserDash
    },

  ]
})
