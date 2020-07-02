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
      //参考链接： https://blog.csdn.net/Liu_yunzhao/article/details/90520028
      devServer: {
        port: '3030',
        proxy: {
            '/api': {
                target: 'https://apilightmv.aoscdn.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
        }
    }

};