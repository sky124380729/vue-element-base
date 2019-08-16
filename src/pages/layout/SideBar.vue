<template>
    <div class="layout__side">
        <img class="logo" src="~imgs/logo.png" alt="" />
        <el-scrollbar wrapClass="menu-wrapper">
            <!-- 
                default-active="$route.path" 路径等于当前路由，可以让路由在跳转的时候对应高亮 
                unique-opened 是否只保持一个菜单展开
             -->
            <el-menu :collapse="collapse" background-color="#363C42" text-color="#fff" active-text-color="#ffd04b" router unique-opened :default-active="activePath">
                <sidebar-item v-for="item in menuList" :key="item.name" :data="item"></sidebar-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import Layout from '@/pages/layout/Layout'
import Test from './Test'
import Test2 from './Test2'
import Test3 from './Test3'
import SidebarItem from './SidebarItem'
export default {
    name: 'sidebar',
    computed: {
        menuList() {
            return [
                {
                    path: '/system',
                    name: 'system',
                    component: Layout,
                    meta: { title: '基础资料管理', menu: true },
                    children: [
                        {
                            path: 'resource',
                            component: Test2,
                            name: 'system-resource',
                            meta: { title: '系统资源管理', icon: 'el-icon-s-tools', menu: true },
                            children: [
                                {
                                    path: 'xxx',
                                    component: Test3,
                                    name: 'system-resource-xxx',
                                    meta: { title: '系统资源管理子菜单', icon: 'el-icon-user', menu: true }
                                }
                            ]
                        },
                        {
                            path: 'relationship',
                            component: Test,
                            name: 'system-relationship',
                            meta: { title: '人员关系管理', menu: true }
                        },
                        {
                            path: 'role',
                            component: Test,
                            name: 'system-role',
                            meta: { title: '系统角色管理', menu: true }
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
            return this.$route.path.replace(/(.*)\/index$/, '$1')
        }
    },
    components: {
        SidebarItem
    }
}
</script>
