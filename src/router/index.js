import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'pages/layout/Layout'
import modules from './modules'
import common from './common' // 引入通用模块

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        ...common,
        {
            path: '/system',
            component: Layout,
            name: 'system',
            meta: { title: '系统管理', icon: 'el-icon-news' },
            children: modules.system
        }
    ]
})
