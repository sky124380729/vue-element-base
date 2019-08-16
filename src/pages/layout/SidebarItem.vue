<template>
    <!-- 有子菜单 -->
    <el-submenu :index="path + data.path" v-if="data.children && data.children.length">
        <template #title>
            <i :class="(data.meta && data.meta.icon) || 'el-icon-success'" class="icon"></i>
            <span>{{ data.meta && data.meta.title }}</span>
        </template>
        <sidebar-item v-for="child in data.children" :key="child.name" :data="child" />
    </el-submenu>
    <!-- 没有子菜单 -->
    <el-menu-item v-wave :index="data.path" v-else>
        
        <template #title>
            <i :class="(data.meta && data.meta.icon) || 'el-icon-success'" class="icon"></i>
            <span>{{ data.meta && data.meta.title }}</span>
        </template>
    </el-menu-item>
</template>

<script>
export default {
    name: 'SidebarItem',
    props: {
        data: Object,
        path: {
            type:String,
            default:''
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
