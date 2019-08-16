import Layout from '@/pages/layout/Layout'
export default {
    path: '/equipment',
    component: Layout,
    name: 'equipment',
    meta: { title: '设备管理' },
    children: [
        {
            path: 'info',
            component: () => import(/* webpackChunkName: "equipment" */ '@/pages/equipment'),
            name: 'equipment-info',
            meta: { title: '设备信息管理' }
        },
        {
            path: 'info/opt/:id',
            component: () => import(/* webpackChunkName: "equipment" */ '@/pages/equipment/opt'),
            props: true,
            name: 'equipment-info',
            meta: { title: '设备信息操作' }
        }
    ]
}
