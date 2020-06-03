const getters = {
    isCollapse: state => state.common.isCollapse,
    colorName: state => state.common.colorName,
    themeName: state => state.common.themeName,
    language: state => state.common.language,
    logsList: state => state.errorLog.logsList,
}

export default getters;