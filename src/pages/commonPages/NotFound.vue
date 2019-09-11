<template>
    <section style="color:#fff;">
        <p>页面找不到了</p>
        <el-button @click="goBack">点我返回</el-button>
    </section>
</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>
