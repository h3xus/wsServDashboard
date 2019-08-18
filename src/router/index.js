import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
// import ServerPanel from '@/components/ServerPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
