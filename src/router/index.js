import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import NotFound from 'pages/layout/NotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '*',
            redirect: '/404'
        },
        {
            path: '/404',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
