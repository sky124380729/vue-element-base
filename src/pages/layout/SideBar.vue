<template>
    <el-scrollbar class="menu" wrapClass="menu-wrapper">
        <!-- <h1 class="logo">嘉展科技有限公司</h1> -->
        <img class="logo" src="~imgs/logo.png" alt="" />
        <!-- default-active="$route.path" 路径等于当前路由，可以让路由在跳转的时候对应高亮 unique-opened 是否只保持一个菜单展开 -->
        <el-menu :collapse="collapse" background-color="#363C42" text-color="#fff" active-text-color="#ffd04b" router :default-active="activePath" unique-opened>
            <sidebar-item v-for="item in menuList" :key="item.name" :data="item"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import Test from './Test'
import SidebarItem from './SidebarItem'
export default {
    name: 'sidebar',
    computed: {
        menuList() {
            return [
                {
                    path: '/system',
                    name: 'system',
                    component: Test,
                    meta: { title: '基础资料管理', menu: true },
                    children: [
                        {
                            path: 'resource',
                            component: () => import('./Test'),
                            name: 'system-resource',
                            meta: { title: '系统资源管理', menu: true },
                            children: [
                                {
                                    path: 'resource',
                                    component: () => import('./Test'),
                                    name: 'system-resource',
                                    meta: { title: '系统资源管理子菜单', menu: true }
                                }
                            ]
                        },
                        {
                            path: 'relationship',
                            component: () => import('./Test'),
                            name: 'system-relationship',
                            meta: { title: '人员关系管理', menu: true }
                        },
                        {
                            path: 'role',
                            component: () => import('./Test'),
                            name: 'system-role',
                            meta: { title: '系统角色管理', menu: true }
                        },
                        {
                            path: 'organization',
                            component: () => import('./Test'),
                            name: 'system-organization',
                            meta: { title: '系统组织管理', menu: true }
                        },
                        {
                            path: 'user',
                            component: () => import('./Test'),
                            name: 'system-user',
                            meta: { title: '系统人员管理', menu: true }
                        },
                        {
                            path: 'schedule',
                            component: () => import('./Test'),
                            name: 'system-schedule',
                            meta: { title: '人员班次管理', menu: true }
                        },
                        {
                            path: 'lookup',
                            component: () => import('./Test'),
                            name: 'system-lookup',
                            meta: { title: '数据字典管理', menu: true }
                        },
                        {
                            path: 'relationship',
                            component: () => import('./Test'),
                            name: 'system-relationship1',
                            meta: { title: '人员关系管理', menu: true }
                        },
                        {
                            path: 'role',
                            component: () => import('./Test'),
                            name: 'system-role1',
                            meta: { title: '系统角色管理', menu: true }
                        },
                        {
                            path: 'organization',
                            component: () => import('./Test'),
                            name: 'system-organization1',
                            meta: { title: '系统组织管理', menu: true }
                        },
                        {
                            path: 'user',
                            component: () => import('./Test'),
                            name: 'system-user1',
                            meta: { title: '系统人员管理', menu: true }
                        },
                        {
                            path: 'schedule',
                            component: () => import('./Test'),
                            name: 'system-schedule1',
                            meta: { title: '人员班次管理', menu: true }
                        },
                        {
                            path: 'lookup',
                            component: () => import('./Test'),
                            name: 'system-lookup1',
                            meta: { title: '数据字典管理', menu: true }
                        },
                        {
                            path: 'relationship',
                            component: () => import('./Test'),
                            name: 'system-relationship2',
                            meta: { title: '人员关系管理', menu: true }
                        },
                        {
                            path: 'role',
                            component: () => import('./Test'),
                            name: 'system-role2',
                            meta: { title: '系统角色管理', menu: true }
                        },
                        {
                            path: 'organization',
                            component: () => import('./Test'),
                            name: 'system-organization2',
                            meta: { title: '系统组织管理', menu: true }
                        },
                        {
                            path: 'user',
                            component: () => import('./Test'),
                            name: 'system-user2',
                            meta: { title: '系统人员管理', menu: true }
                        },
                        {
                            path: 'schedule',
                            component: () => import('./Test'),
                            name: 'system-schedule2',
                            meta: { title: '人员班次管理', menu: true }
                        },
                        {
                            path: 'lookup',
                            component: () => import('./Test'),
                            name: 'system-lookup2',
                            meta: { title: '数据字典管理', menu: true }
                        },
                        {
                            path: 'relationship',
                            component: () => import('./Test'),
                            name: 'system-relationship3',
                            meta: { title: '人员关系管理', menu: true }
                        },
                        {
                            path: 'role',
                            component: () => import('./Test'),
                            name: 'system-role3',
                            meta: { title: '系统角色管理', menu: true }
                        },
                        {
                            path: 'organization',
                            component: () => import('./Test'),
                            name: 'system-organization3',
                            meta: { title: '系统组织管理', menu: true }
                        },
                        {
                            path: 'user',
                            component: () => import('./Test'),
                            name: 'system-use3r',
                            meta: { title: '系统人员管理', menu: true }
                        },
                        {
                            path: 'schedule',
                            component: () => import('./Test'),
                            name: 'system-schedule3',
                            meta: { title: '人员班次管理', menu: true }
                        },
                        {
                            path: 'lookup',
                            component: () => import('./Test'),
                            name: 'system-lookup3',
                            meta: { title: '数据字典管理', menu: true }
                        }
                    ]
                }
            ]
        },
        collapse() {
            return this.$store.state.collapse
        },
        activePath() {
            // 如果是以/index结尾的，则去掉
            const path = this.$route.path
            return /\/index$/.test(path) ? path.substring(0, path.length - 6) : path
        }
    },
    components: {
        SidebarItem
    }
}
</script>

<style lang="scss" scoped>
.menu {
    height: 100%;
    .logo {
        width: 90%;
        margin: 0 auto;
        height: $nav-height;
        object-fit: contain;
    }
    .el-menu {
        border-right: none !important;
        &--collapse {
            width: inherit;
        }
    }
}
</style>
