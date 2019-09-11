import Login from 'pages/commonPages/Login'
import NoPermission from 'pages/commonPages/NoPermission'
export default [
    {
        path: '/',
        redirect: '/platform'
    },
    {
        path: '/noPermission',
        component: NoPermission
    },
    {
        path: '/login',
        component: Login
    }
]
