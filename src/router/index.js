import Vue from 'vue'
import Router from 'vue-router'
import Layout from 'pages/layout/Layout'
import NotFound from 'pages/commonPages/NotFound'
import modules from './modules'
import common from './common' // 引入通用模块

Vue.use(Router)

const createRouter = () =>
    new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        scrollBehavior: () => ({ y: 0 }),
        routes: common
    })

const router = createRouter()

// 重置路由方法
export const resetRouter = () => {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

// 动态路由
export const asyncRouter = [
    {
        path: '*',
        redirect: '/404',
        meta: { always: true }
    },
    {
        path: '/404',
        component: NotFound,
        meta: { always: true }
    },
    {
        path: '/platform',
        component: Layout,
        redirect: '/platform/index',
        name: 'platform',
        meta: { title: '首页', icon: 'el-icon-s-home', menu: true, always: true },
        children: [
            {
                path: 'index',
                name: 'platform-index',
                component: () => import('pages/platform'),
                meta: { title: '中央控制台', always: true }
            }
        ]
    },
    {
        path: '/system',
        component: Layout,
        name: 'system',
        meta: { title: '系统管理', icon: 'el-icon-menu', menu: true },
        children: modules.system
    },
    {
        path: '/test',
        component: Layout,
        name: 'test',
        meta: { title: '组件测试', icon: 'el-icon-menu', menu: true },
        children: modules.test
    }
]

export default router
