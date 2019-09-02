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
        icon: 'el-icon-s-tools',
        title: '系统管理',
        children: [
            {
                id: '7c4475637c38409ca865a799eb0dcfa2',
                path: 'resource',
                name: 'system-resource',
                title: '资源管理',
                children: [
                    {
                        id: '7c4475637c38409ca865a799eb0dcf33',
                        title: '新增',
                        name: 'system-resource-add',
                        isBtn: true
                    },
                    {
                        id: '7c4475637c38409ca865a799eb044f00',
                        title: '编辑',
                        name: 'system-resource-edit',
                        isBtn: true
                    }
                ]
            },
            {
                id: '7c4475637c38409ca865a799eb0dc1a2',
                path: '/person',
                name: 'system-person',
                title: '人员管理',
                children: [
                    {
                        id: '7c4475637c38409ca865a799e30dcf33',
                        title: '新增',
                        name: 'system-person-add',
                        isBtn: true
                    },
                    {
                        id: '7c4475637c38409ca865a79944044f00',
                        title: '编辑',
                        name: 'system-person-edit',
                        isBtn: true
                    }
                ]
            }
        ]
    }
]
