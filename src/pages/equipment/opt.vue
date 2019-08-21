<template>
    <div>
        opt.vue
    </div>
</template>

<script>
export default {
    props: {
        id: String
    },
    data() {
        return {}
    },
    created() {
        console.log(this.id, 'id')
        console.log(this.$route)
    }
}
</script>
