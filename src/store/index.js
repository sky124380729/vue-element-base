import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'
import { asyncRouter } from '@/router'
import { deepClone } from '@/utils/tools'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapse: false, // 菜单栏是否收缩
        authorized: false, // 是否拉取了授权菜单
        accsessRoutes: [], // 已注册的路由
        navTags: [], // 标签导航列表
        cachedViews: [] // 缓存的页面
    },
    getters: {
        cachedViews: state => state.cachedViews,
        accsessRoutes: state => state.accsessRoutes,
        menuList: state => {
            // 过滤出menu为true的路由
            const filterMenus = menus => {
                return menus.filter(item => {
                    if (item.children && item.children.length) {
                        item.children = filterMenus(item.children)
                    }
                    return item.meta.menu
                })
            }
            return filterMenus(state.accsessRoutes)
        },
        navTags: state => state.navTags
    },
    mutations: {
        SET_ACCSESS_ROUTES(state, accsessRoutes) {
            state.authorized = true
            state.accsessRoutes = accsessRoutes
        },
        SET_COLLAPSE(state, flag) {
            state.collapse = flag
        },
        // 添加tag导航，以及存储cache
        ADD_NAVTAGS: (state, route) => {
            // 如果导航列表里面已经有该标签，则不添加
            if (state.navTags.find(item => item.path === route.path)) return
            // 添加tag标签导航
            state.navTags.push(route)
            // 添加缓存列表(目前采用name的方式进行缓存)
            state.cachedViews.push(route.name)
        },
        // 删除tag导航，以及存储的cache
        DEL_NAVTAGS: (state, route) => {
            // 删除tag标签
            for (const [index, item] of state.navTags.entries()) {
                if (item.path === route.path) {
                    state.navTags.splice(index, 1)
                    break
                }
            }
            // 删除缓存
            for (const i of state.cachedViews) {
                if (i === route.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },
        // 删除缓存
        DEL_NAVTAG_CACHE: (state, name) => {
            for (const i of state.cachedViews) {
                if (i === name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews.splice(index, 1)
                    break
                }
            }
        },
        // 删除其他标签
        DEL_OTHER_NAVTAGS: (state, route) => {
            // 删除tag标签
            for (const [index, item] of state.navTags.entries()) {
                if (item.path === route.path) {
                    state.navTags = state.navTags.slice(index, index + 1)
                    break
                }
            }
            // 删除缓存
            for (const i of state.cachedViews) {
                if (i === route.name) {
                    const index = state.cachedViews.indexOf(i)
                    state.cachedViews = state.cachedViews.slice(index, index + 1)
                    break
                }
            }
        },
        // 删除全部tag，以及存储的chace
        DEL_ALL_NAVTAGS: state => {
            state.navTags = []
            state.cachedViews = []
        },
        // 退出登录
        LOGOUT: state => {
            state.navTags = []
            state.cachedViews = []
            Cookie.remove('token')
        }
    },
    actions: {
        setAccessRoutes: ({ commit }) => {
            return new Promise(resolve => {
                // TODO:假装我这个nameList是异步获取的,嘿嘿
                const nameList = ['system', 'system-role', 'system-resource', 'test', 'test-count', 'test-debounce', 'test-fn']
                const filterRouter = routes => {
                    return routes.filter(route => {
                        if (route.children && route.children.length) {
                            route.children = filterRouter(route.children)
                        }
                        return (route.meta && route.meta.always) || nameList.indexOf(route.name) !== -1
                    })
                }
                const accessRoutes = filterRouter(asyncRouter)
                commit('SET_ACCSESS_ROUTES', accessRoutes)
                resolve(accessRoutes)
            })
        },
        logout: ({ commit }) => {
            commit('LOGOUT')
        }
    }
})
