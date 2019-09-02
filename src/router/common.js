import Login from 'pages/commonPages/Login'
import NotFound from 'pages/commonPages/NotFound'
import NoPermission from 'pages/commonPages/NoPermission'
import Layout from 'pages/layout/Layout'
export default [
    // {
    //     path: '*',
    //     redirect: '/404'
    // },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '/noPermission',
        component: NoPermission
    },
    {
        path: '/',
        component: Layout
    },
    {
        path: '/login',
        component: Login
    }
]
