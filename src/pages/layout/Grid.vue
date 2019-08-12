<template>
    <div class="grid">
        <div class="grid__logo">
            <h1 class="logo">嘉展科技有限公司</h1>
        </div>
        <div class="grid__menu">
            <Menu />
        </div>
        <div class="grid__header"></div>
        <div class="grid__nav"></div>
        <div class="grid__content"></div>
    </div>
</template>

<script>
import Menu from './Menu'
export default {
    name: 'grid',
    components: {
        Menu
    }
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: 200px 1fr;
    grid-template-rows: 56px 40px 1fr;
    background-color: $-color--bg;
    overflow-x: hidden;
    &__logo {
        background: #2b3035;
        .logo {
            height: 100%;
            text-indent: -9999px;
            background: url(~imgs/logo.png) no-repeat center;
        }
    }
    &__menu {
        grid-row: 2 / -1;
        background-color: $-color--bg;
    }
    &__header {
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    &__nav {
        background-color: aquamarine;
    }
    &__content {
        background-color: aqua;
    }
}
</style>
