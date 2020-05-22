import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    dateChosed: '-6',
  },
  getters:{
    //  getCityId(){  //方法名随意,主要是用来承载变化的cityID的值 相当于computed();
    //     return state.cityID
    //  }
  },
  mutations: {
    // setCityID(state, value) {
    //   state.cityID = value;
    // }
  },
  actions: {
    // selectCityID(context, params) {
    //   context.commit('setCityID', params.cityID);
    // }
  }
});
//获取state的方法: this.$store.state 
//修改state的方法：1.用this.$store.commit执行mutation里的方法 2.用 this.$store.dispatch执行actions里的方法
// this.$store.commit("setCityID", 6);
// this.$store.dispatch("selectCityID", { id: 110 });
export default store;
