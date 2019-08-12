<template>
    <div class="grid">
        <div class="grid__header">
            <NavBar />
        </div>
        <div class="grid__menu">
            <SideBar />
        </div>
        <div class="grid__nav"></div>
        <div class="grid__content"></div>
    </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
export default {
    name: 'grid',
    components: {
        SideBar,
        NavBar
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
    &__menu {
        grid-row: 1 / -1;
        background-color: $-color--bg;
        transition: width 0.4s;
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
