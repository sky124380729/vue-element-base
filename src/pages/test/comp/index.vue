<template>
    <section class="test">
        <p>count-to</p>
        <count-to :startVal="1000" :endVal="2000" :duration="3000" :decimals="2" prefix="$"></count-to>
        <p>Debounce</p>
        <el-button @click="print">延迟函数</el-button>
        <p>fn</p>
        <fn :component="type" type="danger" @click="test">
            Hello World
        </fn>
        <p>hoc</p>
        <Hocx>呵呵</Hocx>
        <p>api</p>
        <el-button type="warning" @click="api('/test/101')">101</el-button>
        <el-button type="primary" @click="api('/test/200')">200</el-button>
        <el-button type="danger" @click="api('/test/500')">500</el-button>
        <el-button type="success" @click="api('/test/excel')">excel</el-button>
    </section>
</template>

<script>
import CountTo from 'vue-count-to'
import { Debounce } from '@/utils/tools'
import Hoc from '@/components/local/Hoc'
import { Button } from 'element-ui'
export default {
    components: {
        CountTo,
        Hocx: Hoc(Button, {
            mounted() {
                console.log('我是高阶组件混入的方法')
            }
        })
    },
    data() {
        return {
            type: 'el-button'
        }
    },
    methods: {
        print: Debounce(() => {
            console.log('我在延迟1s之后打印出来了')
        }, 1000),
        test() {
            console.log('Hello World')
        },
        api(url) {
            if (url !== '/test/excel') {
                this.$http.post(url)
            } else {
                this.$http.download(url, '我是测试文件.xlsx', {})
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.test {
    padding: 20px;
    p {
        color: #e6e6e6;
        margin: 20px 0;
        font-size: 28px;
    }
}
</style>
