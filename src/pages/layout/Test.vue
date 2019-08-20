<template>
    <el-button v-debounce:click="2000" type="success" @click="test" @blur="xxx">xxxxxxxxxxx</el-button>
</template>

<script>
export default {
    data() {
        return {
            type: 'el-button'
        }
    },
    directives: {
        debounce: {
            inserted(el, binding, vnode) {
                const mouseType = binding.arg
                const timeout = binding.value || 300
                const vm = vnode.componentInstance
                el.addEventListener(mouseType, () => {
                    if (!vm.loading) {
                        vm.loading = true
                        setTimeout(() => {
                            vm.loading = false
                        }, timeout)
                    }
                })
            }
        }
    },
    methods: {
        xxx() {},
        test() {
            console.log('Hello World')
        }
    }
}
</script>
