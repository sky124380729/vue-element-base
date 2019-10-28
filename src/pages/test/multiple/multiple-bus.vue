<template>
    <keep-alive include="index">
        <component :is="comp" :id="id" :view="view"></component>
    </keep-alive>
</template>
<script>
import { compBus } from '@/mixins'
import Index from './multiple-list'
import Opt from './multiple-opt'
export default {
    name: 'test-multiple',
    mixins: [compBus],
    components: {
        Index,
        Opt
    }
}
</script>
