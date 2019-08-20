const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    css: {
        loaderOptions: {
            // 向所有 Sass 样式传入共享的全局变量
            sass: {
                data: `@import "~@/styles/_variables.scss";`
            }
        }
    },
    lintOnSave: true, // 为error会导致编译失败
    chainWebpack: config => {
        config.resolve.alias
            .set('pages', resolve('src/pages'))
            .set('static', resolve('src/static'))
            .set('imgs', resolve('src/assets/imgs'))
            .set('styles', resolve('src/styles'))
    },
    // 生产环境不生成.map文件
    productionSourceMap: false,
    devServer: {
        hot: true,
        open: true,
        allowedHosts: ['*'], // 解决ie浏览器websocket跨域问题
        inline: true,
        stats: {
            colors: true
        },
        proxy: {
            '/api': {
                changeOrigin: true,
                // 目标服务器地址
                target: 'http://cfm.cloudkeeper.cn'
            }
        }
    }
}
