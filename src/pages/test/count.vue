<template>
    <count-to :startVal="1000" :endVal="2000" :duration="3000" :decimals="2" prefix="$"></count-to>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
    components: {
        CountTo
    }
}
</script>
