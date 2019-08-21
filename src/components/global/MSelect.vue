<template>
    <el-select v-on="$listeners" v-bind="$attrs" :loading="loading" :value="value" @change="valChange">
        <el-option v-for="(i, d) in selectList" :key="i.value + d" :label="i.label" :value="i.value"></el-option>
    </el-select>
</template>

<script>
export default {
    name: 'mSelect',
    inheritAttrs: false,
    props: {
        mValue: [String, Number],
        options: Array
    },
    model: {
        prop: 'mValue',
        event: 'mChange'
    },
    data() {
        return {
            value: this.mValue,
            loading: false,
            selectList: this.options
        }
    },
    watch: {
        mValue(val) {
            this.value = val
        }
    },
    methods: {
        valChange(val) {
            this.$emit('mChange', val)
        }
    }
}
</script>
