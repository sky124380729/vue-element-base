<template>
    <div class="layout__nav">
        <!-- 左侧按钮组 -->
        <div class="layout__nav-left">
            <i class="icon" :class="navIconClass" @click="setCollapse(!collapse)"></i>
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <transition-group name="breadcrumb">
                    <el-breadcrumb-item v-for="item in breadList" :key="item.path">{{ item.name }}</el-breadcrumb-item>
                </transition-group>
            </el-breadcrumb>
        </div>
        <!-- 右侧按钮组 -->
        <div class="layout__nav-right">
            <img class="avatar" src="~imgs/vue.png" alt="" />
            <el-dropdown trigger="click" @command="navCommand">
                <span class="el-dropdown-link">Pink丶缤<i class="el-icon-arrow-down el-icon--right"></i> </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="setting">设置</el-dropdown-item>
                    <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    computed: {
        collapse() {
            return this.$store.state.collapse
        },
        breadList() {
            // 如果有重定向，则是由于没有子菜单(因此过滤掉)
            return this.$route.matched.filter(route => !route.redirect)
        },
        navIconClass() {
            return `el-icon-s-${this.collapse ? 'unfold' : 'fold'}`
        }
    },
    methods: {
        navCommand(command) {
            if (command === 'setting') {
                this.$message.info('敬请期待~')
            } else if (command === 'logout') {
                this.$router.push('/login')
            }
        },
        setCollapse(flag) {
            this.$store.commit('SET_COLLAPSE', flag)
        }
    }
}
</script>
