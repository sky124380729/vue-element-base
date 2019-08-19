import router from './router'
// import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach((to, from, next) => {
    const token = sessionStorage.getItem('token')
    NProgress.start()
    // 如果跳转到登录页，清除token
    if (to.path === '/login') {
        sessionStorage.removeItem('token')
    }
    // 没有token就跳转到登录
    if (!token && to.path !== '/login') {
        next({ path: '/login' })
        NProgress.done()
        return
    } else {
        next()
    }
})

router.afterEach(() => {
    NProgress.done()
})
