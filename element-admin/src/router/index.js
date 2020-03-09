import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 因为webpack.base.conf.js配置了alias,所以@是指向src目录的

// 有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
// const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
// const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
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
          name: 'pageOne',
          component: () => import('@/view/one/pageOne.vue'),
        },
        {
          path: 'pageTwo',
          name: 'pageTwo',
          component: () => import('@/view/two/pageTwo.vue'),
        },


      
      ]
    },
    { path: '*', redirect: '/user/404', hidden: true }
  ]
})
