<template>
    <section>
        <fn :component="type" type="danger" @click="test">
            Hello World
        </fn>
        <m-input v-model="x"></m-input>
    </section>
</template>

<script>
export default {
    data() {
        return {
            x: '',
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
