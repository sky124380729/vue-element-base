<template>
    <m-table title="未定义标题" :queryArr="queryArr" ref="mTable">
        <template #buttons>
            <el-button type="success" size="mini" @click="handle()">新增</el-button>
        </template>
        <el-table-column label="属性1" prop="a"></el-table-column>
        <el-table-column label="属性2" prop="b"></el-table-column>
        <el-table-column label="属性3" prop="c"></el-table-column>
        <el-table-column label="属性4" prop="d"></el-table-column>
        <el-table-column label="操作" class-name="operate" align="center" header-align="left" width="110px">
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
            queryArr: [{ key: 'a', ph: '请输入', tag: 'el-input' }]
        }
    },
    methods: {
        handle(row = {}) {
            this.switchPage('Opt', row.id)
        },
        remove(id) {
            this.$http.delete('/test/multiple/', id).then(() => {
                this.$refs.mTable.refresh()
            })
        }
    }
}
</script>
