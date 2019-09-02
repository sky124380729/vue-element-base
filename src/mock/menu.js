// import Mock from 'mockjs'

// export default Mock.mock({
//     'list|4': [
//         {
//             'id|+1': 1,
//             path: 'asdsad'
//     }]
// })

export default [
    {
        id: '7c4475637c38409ca865a799eb0dcfa0',
        name: 'home',
        icon: 'el-icon-s-home',
        title: '首页',
        path: '/',
        children: []
    },
    {
        id: '7c4475637c38409ca865a799eb0dcfa1',
        name: 'system',
        path: '/system',
        title: '系统管理',
        icon: 'el-icon-s-tools',
        children: [
            {
                id: '7c4475637c38409ca865a799eb0dcfa2',
                path: '/system/role',
                name: 'system-role',
                title: '角色管理',
                children: [
                    {
                        id: '7c4475637c38409ca865a799eb0dcf33',
                        title: '新增',
                        name: 'system-resource-add',
                        isBtn: true
                    },
                    {
                        id: '7c4475637c38409ca8633799eb044f00',
                        title: '编辑',
                        name: 'system-resource-edit',
                        isBtn: true
                    },
                    {
                        id: '7c4475637c38409ca865a799eb044f00',
                        title: '授权',
                        name: 'system-resource-auth',
                        path: '/resource/auth',
                        isBtn: true
                    }
                ]
            },
            {
                id: '7c4475637c38409ca865a799eb0dcfa2',
                path: '/system/resource',
                name: 'system-resource',
                title: '资源管理'
            }
        ]
    }
]
