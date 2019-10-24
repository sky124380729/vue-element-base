<template>
    <section>
        <Hocx>呵呵</Hocx>
        <el-button @click="test" :loading="loading">试试</el-button>
    </section>
</template>

<script>
import Hoc from '@/components/local/Hoc'
import { Button } from 'element-ui'
export default {
    components: {
        Hocx: Hoc(Button, {
            mounted() {
                console.log('我是高阶组件混入的方法')
            }
        })
    },
    data() {
        return {
            loading: false
        }
    },
    methods: {
        test() {
            this.$http.post('/test/101')
        }
    }
}
</script>

<style></style>
