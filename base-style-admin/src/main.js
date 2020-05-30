

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css
import i18n from './lang' // Internationalization

Vue.prototype.$center = new Vue() //非父子组件传值


Vue.use(ELEMENT, {
  i18n: (key, value) => i18n.t(key, value)
})

// Vue.use(Element, {
//   size: Cookies.get('size') || 'medium', // set element-ui default size
//   locale: enLang // 如果使用中文，无需设置，请删除
// })

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

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')