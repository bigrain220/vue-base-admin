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
          component: resolve => require(['@/view/one/index'], resolve)
        },
        {
          path: 'page',
          name: 'page',
          component: resolve => require(['@/view/one/page'], resolve)
        },
      
      ]
    }
  ]
})
