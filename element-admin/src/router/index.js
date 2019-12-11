import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)


// 因为webpack.base.conf.js配置了alias,所以@是指向src目录的
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
          path: '404',
          name: 'notFoundPage',
          component: () => import('@/components/common/404'),
        },
        {
          path: 'index',
          name: 'index',
          component: () => import('@/view/one/index.vue'),
        },
        {
          path: 'pageone',
          name: 'pageOne',
          component: () => import('@/view/two/pageone.vue'),
        },


      
      ]
    },
    { path: '*', redirect: '/user/404', hidden: true }
  ]
})
