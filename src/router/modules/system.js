export default [
    {
        path: 'role',
        component: () => import(/* webpackChunkName: "role" */ 'pages/system/role/role-bus'),
        name: 'system-role',
        meta: { title: '角色管理', menu: true }
    },
    {
        path: 'resource',
        component: () => import(/* webpackChunkName: "resource" */ 'pages/system/resource'),
        name: 'system-resource',
        meta: { title: '资源管理', menu: true }
    }
]
