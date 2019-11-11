import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Rank from 'components/rank/rank'
import NewMusic from 'components/newMusic/newMusic'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/rank'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/newMusic',
      component: NewMusic
    }
  ]
})
