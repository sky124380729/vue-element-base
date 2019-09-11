<template>
    <el-scrollbar wrapClass="wrapper-y app-main">
        <section class="layout__content">
            <transition name="el-fade-in-linear" mode="out-in">
                <keep-alive :include="$store.state.cachedViews">
                    <router-view :key="$route.path"></router-view>
                </keep-alive>
            </transition>
        </section>
    </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'app-main',
    computed: {
        ...mapGetters(['cachedViews'])
    }
}
</script>
