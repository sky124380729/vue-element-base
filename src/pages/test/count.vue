<template>
    <count-to :startVal="1000" :endVal="2000" :duration="3000" :decimals="2" prefix="$" @hook:mounted="haha"></count-to>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
    components: {
        CountTo
    },
    methods: {
        haha() {
            console.log(11)
        }
    }
}
</script>
