<template>
    <div class="nav">
        <i class="icon el-icon-s-fold"></i>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style lang="scss" scoped>
.nav {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: $-color--bg;
    .icon {
        font-size: 20px;
        cursor: pointer;
        color: #fff;
    }
}
</style>
