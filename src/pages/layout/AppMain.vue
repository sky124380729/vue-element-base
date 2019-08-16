<template>
    <section class="layout__content">
        <transition name="el-fade-in-linear" mode="out-in">
            <!-- <keep-alive :include="$store.state.cachedViews"> -->
            <keep-alive>
                <router-view :key="$route.path"></router-view>
            </keep-alive>
        </transition>
    </section>
</template>
