import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'user/index',
    }, 
    {
      path: '/user',
      component: resolve => require(['@/components/common/home'], resolve),
      children: [
        {
          path: 'index',
          name: 'index',
          component: () => import('../view/one/index.vue'),
        },
        {
          path: 'pageone',
          name: 'pageOne',
          component: () => import('../view/two/pageone.vue'),
        },
      
      ]
    },
    {
      path: '*',
      redirect: 'user/index'
  }
  ]
})
