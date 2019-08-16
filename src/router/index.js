import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout/Layout'
import Test from '@/pages/layout/Test'
import NotFound from 'pages/layout/NotFound'

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
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/',
            name: 'Layout',
            component: Layout
        },

        {
            path: '/system',
            name: 'system',
            component: Layout,
            meta: { title: '基础资料管理', menu: true },
            children: [
                {
                    path: 'resource',
                    component: Test,
                    name: 'system-resource',
                    meta: { title: '系统资源管理', menu: true },
                    children: [
                        {
                            path: 'resource',
                            component: Test,
                            name: 'system-resource',
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
                },
                {
                    path: 'organization',
                    component: Test,
                    name: 'system-organization',
                    meta: { title: '系统组织管理', menu: true }
                },
                {
                    path: 'user',
                    component: Test,
                    name: 'system-user',
                    meta: { title: '系统人员管理', menu: true }
                },
                {
                    path: 'schedule',
                    component: Test,
                    name: 'system-schedule',
                    meta: { title: '人员班次管理', menu: true }
                },
                {
                    path: 'lookup',
                    component: Test,
                    name: 'system-lookup',
                    meta: { title: '数据字典管理', menu: true }
                },
                {
                    path: 'relationship',
                    component: Test,
                    name: 'system-relationship1',
                    meta: { title: '人员关系管理', menu: true }
                },
                {
                    path: 'role',
                    component: Test,
                    name: 'system-role1',
                    meta: { title: '系统角色管理', menu: true }
                },
                {
                    path: 'organization',
                    component: Test,
                    name: 'system-organization1',
                    meta: { title: '系统组织管理', menu: true }
                },
                {
                    path: 'user',
                    component: Test,
                    name: 'system-user1',
                    meta: { title: '系统人员管理', menu: true }
                },
                {
                    path: 'schedule',
                    component: Test,
                    name: 'system-schedule1',
                    meta: { title: '人员班次管理', menu: true }
                },
                {
                    path: 'lookup',
                    component: Test,
                    name: 'system-lookup1',
                    meta: { title: '数据字典管理', menu: true }
                },
                {
                    path: 'relationship',
                    component: Test,
                    name: 'system-relationship2',
                    meta: { title: '人员关系管理', menu: true }
                },
                {
                    path: 'role',
                    component: Test,
                    name: 'system-role2',
                    meta: { title: '系统角色管理', menu: true }
                },
                {
                    path: 'organization',
                    component: Test,
                    name: 'system-organization2',
                    meta: { title: '系统组织管理', menu: true }
                },
                {
                    path: 'user',
                    component: Test,
                    name: 'system-user2',
                    meta: { title: '系统人员管理', menu: true }
                },
                {
                    path: 'schedule',
                    component: Test,
                    name: 'system-schedule2',
                    meta: { title: '人员班次管理', menu: true }
                },
                {
                    path: 'lookup',
                    component: Test,
                    name: 'system-lookup2',
                    meta: { title: '数据字典管理', menu: true }
                },
                {
                    path: 'relationship',
                    component: Test,
                    name: 'system-relationship3',
                    meta: { title: '人员关系管理', menu: true }
                },
                {
                    path: 'role',
                    component: Test,
                    name: 'system-role3',
                    meta: { title: '系统角色管理', menu: true }
                },
                {
                    path: 'organization',
                    component: Test,
                    name: 'system-organization3',
                    meta: { title: '系统组织管理', menu: true }
                },
                {
                    path: 'user',
                    component: Test,
                    name: 'system-use3r',
                    meta: { title: '系统人员管理', menu: true }
                },
                {
                    path: 'schedule',
                    component: Test,
                    name: 'system-schedule3',
                    meta: { title: '人员班次管理', menu: true }
                },
                {
                    path: 'lookup',
                    component: Test,
                    name: 'system-lookup3',
                    meta: { title: '数据字典管理', menu: true }
                }
            ]
        }
    ]
})
