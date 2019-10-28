export default [
    {
        path: 'single',
        component: () => import('pages/test/single'),
        name: 'test-single',
        meta: { title: '单页测试', menu: true }
    },
    {
        path: 'multiple',
        component: () => import('pages/test/multiple/multiple-bus'),
        name: 'test-multiple',
        meta: { title: '多页测试', menu: true }
    },
    {
        path: 'comp',
        component: () => import('pages/test/comp'),
        name: 'test-comp',
        meta: { title: '组件测试', menu: true }
    }
]
