
const common={
    state:{
        isCollapse:false
    },
    mutations: {
        SET_COLLAPSE(state,params){
          state.isCollapse = params;
        }
      },
    actions:{
        collapseAction({commit},params){
            commit('SET_COLLAPSE', params);
        }
    }
}


export default common;