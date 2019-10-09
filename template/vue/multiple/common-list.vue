<template>
    <m-table title="未定义标题" :queryArr="queryArr" ref="mTable">
        <el-button type="success" slot="buttons" @click="handle()">新增</el-button>
        <el-table-column label="xxx" prop="xxx"></el-table-column>
        <el-table-column label="yyy" prop="yyy"></el-table-column>
        <el-table-column label="操作" class-name="operate" width="140px">
            <template v-slot="{ row }">
                <el-button type="text" @click="handle(row)">编辑</el-button>
                <el-button type="text" @click="remove(row.id)" class="danger">删除</el-button>
            </template>
        </el-table-column>
    </m-table>
</template>

<script>
import { compIndex } from '@/mixins'
export default {
    mixins: [compIndex],
    data() {
        return {
            queryArr: [{ key: 'xxx', ph: '请输入', tag: 'el-input' }]
        }
    },
    methods: {
        handle(row = {}) {
            this.switchPage('Opt', row.id)
        },
        remove(id) {
            this.$http_del('/xxx', id).then(() => {
                this.$refs.mTable.refresh()
            })
        }
    }
}
</script>
