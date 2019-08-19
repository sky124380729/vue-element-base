import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'
import Test from '@/pages/layout/Test'
import Test2 from '@/pages/layout/Test2'
import Test3 from '@/pages/layout/Test3'
import Login from '@/pages/commonPages/Login'
import NotFound from '@/pages/commonPages/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '*',
        //     redirect: '/404'
        // },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '/',
            component: Layout
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/system',
            name: 'system',
            component: Layout,
            meta: { title: '基础资料管理', menu: true },
            children: [
                {
                    path: 'resource',
                    component: Test2,
                    name: 'system-resource',
                    meta: { title: '系统资源管理', menu: true },
                    children: [
                        {
                            path: 'xxx',
                            component: Test3,
                            name: 'system-resource-xxx',
                            meta: { title: '系统资源管理子菜单', menu: true }
                        }
                    ]
                },
                {
                    path: 'relationship',
                    component: Test,
                    name: 'system-relationship',
                    meta: { title: '人员关系管理', menu: true }
                },
                {
                    path: 'role',
                    component: Test,
                    name: 'system-role',
                    meta: { title: '系统角色管理', menu: true }
                }
            ]
        }
    ]
})
