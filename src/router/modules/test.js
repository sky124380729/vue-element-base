export default [
    {
        path: 'table',
        component: () => import('pages/test/table'),
        name: 'test-table',
        meta: { title: '基础列表', menu: true }
    },
    {
        path: 'count',
        component: () => import('pages/test/count'),
        name: 'test-count',
        meta: { title: '计数器', menu: true }
    },
    {
        path: 'debounce',
        component: () => import('pages/test/debounce'),
        name: 'test-debounce',
        meta: { title: '消抖', menu: true }
    },
    {
        path: 'fn',
        component: () => import('pages/test/fn'),
        name: 'test-fn',
        meta: { title: 'fn组件', menu: true }
    },
    {
        path: 'hoc',
        component: () => import('pages/test/highOrderComp'),
        name: 'test-hoc',
        meta: {
            title: 'hoc',
            menu: true,
            btnList: {
                append: '新增',
                edit: '编辑'
            }
        }
    }
    /* SLOT */
]
