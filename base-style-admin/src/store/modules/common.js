import {SET_COLLAPSE,SET_COLOR_NAME,SET_THEME_NAME} from "../types";
import {setStorage,getStorage} from '@/utils/store'
const common={
    state:{
        isCollapse:getStorage({name: 'isCollapse'}) || false,
        colorName:getStorage({name: 'colorName'}) || '#409EFF',
        themeName:getStorage({name: 'themeName'}) || 'theme-default',
    },
    // getters:{
    //     getCollapse(state){
    //       return state.isCollapse
    //     }
    // },
    mutations: {
        [SET_COLLAPSE](state,params){
          state.isCollapse = params;
          setStorage({
            name: 'isCollapse',
            content: state.isCollapse,
            type:"session"
          })
        },
        [SET_COLOR_NAME](state,params){
            state.colorName = params;
            setStorage({
                name: 'colorName',
                content: state.colorName,
              })
        },
        [SET_THEME_NAME]: (state, themeName) => {
            state.themeName = themeName;
            setStorage({
              name: 'themeName',
              content: state.themeName,
            })
        },
      },
    actions:{
        collapseAction({commit},params){
            commit(SET_COLLAPSE, params);
        },
        colorNameAction({commit},params){
            commit(SET_COLOR_NAME, params);
        },
        themeNameAction({commit},params){
            commit(SET_THEME_NAME, params);
        }
    }
}


export default common;