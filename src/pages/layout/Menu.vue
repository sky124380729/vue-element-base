<template>
    <div class="menu">
        <h1 class="logo">嘉展科技有限公司</h1>
        <el-menu default-active="2" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" @open="handleOpen" @close="handleClose"> </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
        handleOpen() {
            console.log(1)
        },
        handleClose() {}
    }
}
</script>

<style lang="scss" scoped>
.menu {
    .logo {
        width: 100%;
        height: 50px;
        text-indent: -9999px;
        background: url(~imgs/logo.png) no-repeat center;
    }
    .el-menu {
        width: 100%;
    }
}
</style>
