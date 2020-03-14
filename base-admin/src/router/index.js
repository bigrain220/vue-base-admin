import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'admin/index',
    }, 
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('@/components/logout/logout'),
    },
    {
      path: '/admin',
      component: resolve => require(['@/components/common/home'], resolve),
      children: [
        {
          path: '404',
          name: 'notFoundPage',
          component: () => import('@/components/common/404'),
        },
        {
          path: 'index',
          name: 'userAccount',
          component: () => import('@/view/accout/userAccount.vue'),
          meta:{requireAuth: true}
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('@/view/order/order.vue'),
          meta:{requireAuth: true}
        },
        {
          path: 'payWay',
          name: 'payWay',
          component: () => import('@/view/config/payWay.vue'),
          meta:{requireAuth: true}
        },
        {
          path: 'consumeConfig',
          name: 'consumeConfig',
          component: () => import('@/view/config/consumeConfig.vue'),
          meta:{requireAuth: true}
        },
        {
          path: 'trade',
          name: 'trade',
          component: () => import('@/view/trade/trade.vue'),
          meta:{requireAuth: true}
        }


      
      ]
    },
    { path: '*', redirect: '/admin/404', hidden: true }
  ]
})
