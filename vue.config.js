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
    }
}
