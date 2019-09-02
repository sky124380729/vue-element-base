import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'pages/layout/Layout'
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
            children: [
                {
                    path: 'role',
                    component: () => import('pages/system/role/role-bus'),
                    name: 'system-role',
                    meta: { title: '角色管理', menu: true }
                },
                {
                    path: 'resource',
                    component: () => import('pages/system/resource'),
                    name: 'system-resource',
                    meta: { title: '资源管理', menu: true }
                }
            ]
        }
    ]
})
