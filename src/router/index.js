import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Finding from 'components/finding/finding'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/finding'
    },
    {
      path: '/finding',
      component: Finding
    },
    {
      path: '/radio',
      name: 'radio',
      component: () => import('components/radio/radio')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('components/mine/mine')
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: () => import('components/cloud/cloud')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('components/account/account')
    }
  ]
})
