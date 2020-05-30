import {SET_COLLAPSE,SET_COLOR_NAME,SET_THEME_NAME,SET_LANGUAGE} from "../types";
import {setStorage,getStorage} from '@/utils/store'
const common={
    state:{
        isCollapse:getStorage({name: 'isCollapse'}) || false,
        colorName:getStorage({name: 'colorName'}) || '#409EFF',
        themeName:getStorage({name: 'themeName'}) || 'theme-default',
        language: getStorage({name: 'language'}) || 'zh',
    },
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
        [SET_LANGUAGE]: (state, language) => {
          state.language = language
          setStorage({
            name: 'language',
            content: state.language
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
        },
        languageAction({commit},params){
          commit(SET_LANGUAGE, params);
      }
    }
}


export default common;