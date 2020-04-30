/**
 * 全站路由配置
 *
 * meta参数说明
 * keepAlive是否缓冲页面
 * isTab是否加入到tag导航
 * isAuth是否需要授权
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import oneRouter from './one' // 页面路由
import twoRouter from './two' // 页面路由
Vue.use(VueRouter)

//创建路由
export const createRouter = () => new VueRouter({
  routes: [...oneRouter, ...twoRouter]
})

const Router = createRouter() // 获得 route 实例

export default Router