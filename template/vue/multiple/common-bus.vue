<template>
    <keep-alive include="index">
        <component :is="comp" :id="id" :view="view"></component>
    </keep-alive>
</template>
<script>
import { compBus } from '@/mixins'
import Index from './common-list'
import Opt from './common-opt'
export default {
    name: '__name__',
    mixins: [compBus],
    components: {
        Index,
        Opt
    }
}
</script>
