<template>
    <div class="layout__nav">
        <i v-if="!collapse" class="icon el-icon-s-fold" @click="setCollapse(true)"></i>
        <i v-else class="icon el-icon-s-unfold" @click="setCollapse(false)"></i>

        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="item in breadList" :key="item.path">{{ item.name }}</el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
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
        }
    },
    methods: {
        setCollapse(flag) {
            this.$store.commit('SET_COLLAPSE', flag)
        }
    }
}
</script>

<style lang="scss" scoped>
.layout__nav {
    height: 56px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 20px;
    background: $height-nav;
    .icon {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
    }
    .el-breadcrumb {
        margin-left: 20px;
        ::v-deep .el-breadcrumb__inner {
            font-weight: normal;
        }
    }
}
</style>
