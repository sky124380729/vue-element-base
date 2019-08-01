module.exports = {
  css: {
    loaderOptions: {
      // 向所有 Sass 样式传入共享的全局变量
      sass: {
        data: `@import "~@/styles/_variables.scss";`
      }
    }
  }
};
