<template>
    <fn :component="type" type="danger" @click="test">
        Hello World
    </fn>
</template>

<script>
export default {
    data() {
        return {
            type: 'el-button'
        }
    },
    methods: {
        test() {
            console.log('Hello World')
        }
    }
}
</script>
