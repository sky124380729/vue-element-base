<template>
    <div class="sidebar-item">
        <!-- 有子菜单 -->
        <el-submenu :index="resolvePath(data.path)" v-if="data.children && data.children.length">
            <template slot="title">
                <i v-if="data.icon" :class="data.icon" class="icon"></i>
                <span slot="title" :style="{ marginLeft: data.icon ? '0' : '10px' }">{{ data.title }}</span>
            </template>
            <sidebar-item v-for="child in data.children" :key="child.name" :data="child" />
        </el-submenu>
        <!-- 没有子菜单 -->
        <el-menu-item :index="resolvePath(data.path)" v-else>
            <i v-if="data.icon" :class="data.icon" class="icon"></i>
            <span slot="title" :style="{ marginLeft: data.icon ? '0' : '10px' }">{{ data.title }}</span>
        </el-menu-item>
    </div>
</template>

<script>
export default {
    name: 'sidebarItem',
    props: {
        data: Object
    },
    methods: {
        resolvePath(path = '') {
            /* const p = this.path === '' ? this.path : this.path + '/'
            return p + path */
            return path
        }
    }
}
</script>

<style lang="scss" scoped>
.icon {
    width: 16px;
    margin-right: 5px;
    text-align: center;
    font-size: 16px;
}
</style>
