import Vue from 'vue'
import Router from 'vue-router'
import RouterConfig from './modules' // 引入业务逻辑模块
import CommonRouters from './common' // 引入通用模块

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: CommonRouters.concat(RouterConfig)
})

console.log(CommonRouters.concat(RouterConfig), '注册的完整路由')
