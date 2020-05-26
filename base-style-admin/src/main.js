

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from '@/router/router.js'
import store from '@/store/index'
import '@/styles/index.scss' // global css



Vue.prototype.$center = new Vue() //非父子组件传值


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
//     if (process.env.NODE_ENV === "production" ? utils.getCookie('ad_auth') == "" : false) {
//       Message.success('抱歉，你还没有登录请重新登录');
//       next({
//         path: '/login',
//       })

//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });



/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')