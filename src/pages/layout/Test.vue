<template>
    <m-search :queryArr="queryArr"></m-search>
</template>

<script>
export default {
    data() {
        return {
            queryArr: [
                {
                    tag: 'el-button'
                },
                {
                    tag: 'el-button'
                },
                {
                    tag: 'el-button'
                },
                {
                    key: 'name',
                    tag: 'el-input',
                    placeholder: '请输入呵呵呵',
                    width: 1000
                },
                {
                    key: 'age',
                    tag: 'el-select',
                    placeholder: '请选择哦吼',
                    options: [
                        {
                            label: '111',
                            value: 111
                        },
                        {
                            label: '222',
                            value: 222
                        }
                    ]
                },
                {
                    key: 'sasd',
                    tag: 'el-date-picker'
                }
            ]
        }
    }
}
</script>
