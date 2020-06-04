module.exports = {
    //路径前缀
    publicPath: "./",
    outputDir: 'dist',
    lintOnSave: process.env.NODE_ENV === 'development',
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
        port: '3030',
        proxy: {
            '/api': {
                target: 'https://apilightmv.aoscdn.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            },
            '/': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api': '/'
                // }
            }
        }
    }
};
