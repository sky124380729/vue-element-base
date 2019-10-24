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
            '/qi': {
                changeOrigin: true,
                target: 'http://172.16.10.170:18093',
                pathRewrite: {
                    '^/qi': '/pf-mes-api'
                }
            }
        }
    },
    //警告 webpack 的性能提示
    configureWebpack: {
        performance: {
            hints: 'warning',
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js')
            }
        }
    }
}
