module.exports = {
    //路径前缀
    publicPath: "./",
    outputDir: 'dist',
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: (config) => {
        //忽略的打包文件
        config.externals({
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT'
        });
    },
    devServer: {
        port: 3030, // 端口
    }

};