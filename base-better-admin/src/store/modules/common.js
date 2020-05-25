import {SET_COLLAPSE} from "../types";

const common={
    state:{
        isCollapse:false
    },
    // getters:{
    //     getCollapse(state){
    //       return state.isCollapse
    //     }
    // },
    mutations: {
        [SET_COLLAPSE](state,params){
          state.isCollapse = params;
        }
      },
    actions:{
        collapseAction({commit},params){
            commit(SET_COLLAPSE, params);
        }
    }
}


export default common;