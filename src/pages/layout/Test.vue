<template>
    <m-table :queryArr="queryArr">
        <el-table-column label="序号" type="index" width="400px"></el-table-column>
        <el-table-column label="姓名"></el-table-column>
        <el-table-column label="性别"></el-table-column>
        <el-table-column label="年龄"></el-table-column>
    </m-table>
</template>

<script>
export default {
    data() {
        return {
            queryArr: [
                {
                    key: 'name',
                    tag: 'el-input',
                    ph: '请输入呵呵呵'
                },
                {
                    key: 'age',
                    tag: 'el-select',
                    ph: '请选择哦吼',
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
                    tag: 'el-date-picker',
                    editable: true
                }
            ]
        }
    }
}
</script>
