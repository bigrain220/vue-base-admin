import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import users from './modules/user'
import common from './modules/common'
// 导出 store 对象
const store = new Vuex.Store({
    getters,
    modules:{
        common,
        users
    }
})
export default store;

