export default [
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
        path: 'fn',
        component: () => import('pages/test/fn'),
        name: 'test-fn',
        meta: { title: 'fn组件', menu: true }
    }
    /* SLOT */
]
