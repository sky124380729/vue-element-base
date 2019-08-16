<template>
    <section class="app-main">
        <transition name="el-fade-in-linear" mode="out-in">
            <!-- <keep-alive :include="$store.state.cachedViews"> -->
            <keep-alive>
                <router-view :key="$route.path"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>

<style lang="scss" scoped>
.app-main {
    background-color: #fff;
    height: calc(100vh - #{$height-nav} - #{$height-tag});
}
</style>
