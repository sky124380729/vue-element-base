<template>
    <div>
        <el-button @click="go">延迟函数</el-button>
    </div>
</template>

<script>
import { Debounce } from '@/utils/tools'
export default {
    methods: {
        go: Debounce(() => {
            console.log(111)
        }, 1000)
    }
}
</script>
