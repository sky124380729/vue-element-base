import router from './index.js'
import store from '../store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'
import Cookies from 'js-cookie'

router.beforeEach(async (to, from, next) => {
    const token = Cookies.get('token')
    NProgress.start()
    if (token) {
        //没有菜单则拉取菜单
        if (!store.state.authorized) {
            try {
                router.addRoutes(await store.dispatch('setAccessRoutes'))
                next({ ...to, replace: true })
            } catch (e) {
                Message.error(e.message || '发生错误')
                NProgress.done()
            }
        } else {
            next()
        }
    } else {
        if (to.path !== '/login') {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }
    // // 如果跳转到登录页，清除token
    // if (to.path === '/login') {
    //     store.dispatch('logout')
    // }
    // // 没有token就跳转到登录
    // if (!token && to.path !== '/login') {
    //     next({ path: '/login' })
    //     NProgress.done()
    //     return
    // } else {
    //     next()
    // }
})

router.afterEach(() => {
    NProgress.done()
})
