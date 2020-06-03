import {setStorage,getStorage} from '@/utils/store'


const errLogs={
    state:{
        logsList: getStorage({name: 'logsList'}) || [],
    },
    mutations: {
        ADD_LOGS: (state, params) => {
          state.logsList.push(params);
          setStorage({name: 'logsList', content: state.logsList})
        },
        CLEAR_LOGS: (state) => {
          state.logsList.splice(0);
          setStorage({name: 'logsList', content: state.logsList})
        }
    },
    actions: {
        addLogsAction({commit},params){
            commit('ADD_LOGS', params);
        },
        clearLogstAction({commit}){
            commit('CLEAR_LOGS');
        },
    },
}

export default errLogs;