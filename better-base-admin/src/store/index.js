import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    isCollapse:false
  },
  getters:{
    getCollapse(state){
      return state.isCollapse
    }
  },
  mutations: {
    setCollapse(state,value){
      state.isCollapse = value;
    }
  },
  actions: {
    collapseAction(context, params){
      context.commit('setCollapse', params);
    }
  }
});
//获取state的方法: this.$store.state 
//修改state的方法：1.用this.$store.commit执行mutation里的方法 2.用 this.$store.dispatch执行actions里的方法
// this.$store.commit("setCollapse", true);
// this.$store.dispatch("collapseAction", true);
export default store;