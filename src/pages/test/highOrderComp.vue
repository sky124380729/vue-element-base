<template>
    <Hocx>
        呵呵
    </Hocx>
</template>

<script>
import Hoc from '@/components/Hoc'
import { Button } from 'element-ui'
export default {
    components: {
        Hocx: Hoc(Button, {
            mounted() {
                console.log('我是高阶组件混入的方法')
            }
        })
    }
}
</script>

<style></style>
