import Layout from '@/pages/layout/Layout'
import Test from '@/pages/layout/Test'
import Test2 from '@/pages/layout/Test2'
import Test3 from '@/pages/layout/Test3'
export default {
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
            name: 'systemRole',
            meta: { title: '系统角色管理', menu: true }
        }
    ]
}
