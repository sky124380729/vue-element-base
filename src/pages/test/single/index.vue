<template>
    <section>
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

        <m-dialog :visible.sync="visible" title="未定义标题" :rules="rules" :model="model" @submit="submit" :submit-loading="submitLoading">
            <el-form-item label="测试项目1：" prop="a">
                <m-input v-model="model.a"></m-input>
            </el-form-item>
            <el-form-item label="测试项目2：" prop="b">
                <m-input v-model="model.b"></m-input>
            </el-form-item>
            <el-form-item label="测试项目3：" prop="c">
                <m-select v-model="model.c" :init-data="() => [{ label: 1, value: 1 }]"></m-select>
            </el-form-item>
            <el-form-item label="测试项目4：" prop="d">
                <m-input type="textarea" v-model="model.d"></m-input>
            </el-form-item>
        </m-dialog>
    </section>
</template>

<script>
import { Debounce } from '@/utils/tools'
export default {
    name: 'test-table',
    data() {
        const checkCode = async (rule, value, callback) => {
            const res = await this.$http.post('/exists/xxx', {
                data: {
                    id: this.model.id,
                    uniqueValue: value
                }
            })
            if (!res) return
            const { content } = res
            callback(content ? new Error('已存在') : undefined)
        }
        return {
            model: {},
            visible: false,
            queryArr: [{ key: 'a', ph: '请输入', tag: 'el-input' }],
            submitLoading: false,
            rules: {
                a: [{ required: true, message: '此项为必填项' }, { validator: Debounce(checkCode) }]
            }
        }
    },
    methods: {
        handle(row = {}) {
            this.model = { ...row }
            this.visible = true
        },
        remove(id) {
            this.$http.delete('/xxx/', id).then(() => {
                this.$refs.mTable.refresh()
            })
        },
        async submit() {
            const res = await this.$http[this.model.id ? 'put' : 'post']('/test/qqq', {
                data: this.model,
                vm: this,
                loading: 'submitLoading'
            })
            if (!res) return
            this.$refs.mTable.refresh()
            this.formVisible = false
        }
    }
}
</script>
