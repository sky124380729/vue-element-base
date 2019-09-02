export default [
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
