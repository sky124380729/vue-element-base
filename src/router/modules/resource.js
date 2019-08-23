import Layout from 'pages/layout/Layout'
import Resource from 'pages/Resource'
import ResourceOpt from 'pages/Resource/opt'
export default [
    {
        path: '/resource',
        redirect: '/resource/index',
        component: Layout,
        name: 'resource',
        meta: { title: '系统菜单管理' },
        children: [
            {
                path: 'index',
                component: Resource,
                name: 'resourceIndex',
                meta: { title: '系统菜单' }
            },
            {
                path: 'add',
                component: ResourceOpt,
                name: 'resourceAdd',
                meta: { title: '系统菜单新增' }
            },
            {
                path: 'edit/:id',
                component: ResourceOpt,
                props: true,
                name: 'resourceEdit',
                meta: { title: '系统菜单编辑' }
            },
            {
                path: 'view/:id',
                component: ResourceOpt,
                props: true,
                name: 'resourceView',
                meta: { title: '系统菜单查看' }
            }
        ]
    }
]
