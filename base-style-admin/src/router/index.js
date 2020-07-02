/**
 * 全站路由配置
 *
 * meta参数说明
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import oneRouter from './modules/one' // 页面路由
import twoRouter from './modules/two' // 页面路由
Vue.use(VueRouter)

//创建路由
export const createRouter = () => new VueRouter({
  routes: [...oneRouter, ...twoRouter]
})

const Router = createRouter() // 获得 route 实例

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  Router.matcher = newRouter.matcher // reset router
}

export default Router