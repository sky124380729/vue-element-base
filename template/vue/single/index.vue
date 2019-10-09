<template>
    <section>
        <m-table title="未定义标题" :queryArr="queryArr" ref="mTable">
            <template #buttons>
                <el-button type="success" @click="handle()">新增</el-button>
            </template>
            <el-table-column label="xxx" prop="xxx"></el-table-column>
            <el-table-column label="yyy" prop="yyy"></el-table-column>
            <el-table-column label="zzz" prop="zzz"></el-table-column>
            <el-table-column label="操作" class-name="operate" width="140px">
                <template v-slot="{ row }">
                    <el-button type="text" @click="handle(row)">编辑</el-button>
                    <el-button type="text" @click="remove(row.id)" class="danger">删除</el-button>
                </template>
            </el-table-column>
        </m-table>

        <m-dialog :visible.sync="visible" title="未定义标题" :rules="rules" :model="model" @submit="submit" :submit-loading="submitLoading">
            <el-form-item label="测试项目1：" prop="xxx">
                <m-input v-model="model.xxx"></m-input>
            </el-form-item>
            <el-form-item label="测试项目2：" prop="yyy">
                <m-input v-model="model.yyy"></m-input>
            </el-form-item>
            <el-form-item label="测试项目3：" prop="zzz">
                <m-select v-model="model.zzz" :init-data="() => [{ label: 1, value: 1 }]"></m-select>
            </el-form-item>
            <template #buttons>
                <el-button type="primary" @click="submit" :loading="submitLoading">提交</el-button>
            </template>
        </m-dialog>
    </section>
</template>

<script>
export default {
    name: '__name__',
    data() {
        const checkCode = async (rule, value, callback) => {
            const res = await this.$http_post('/exists/xxx', {
                data: {
                    id: this.model.id,
                    uniqueValue: value
                }
            })
            if (!res) return
            const { content } = res
            if (content) {
                callback(new Error('已存在'))
            } else {
                callback()
            }
        }
        return {
            model: {},
            visible: false,
            queryArr: [{ key: 'xxx', ph: '请输入', tag: 'el-input' }],
            submitLoading: false,
            rules: {
                xxx: [{ required: true, message: '此项为必填项' }, { validator: checkCode }]
            }
        }
    },
    methods: {
        handle(row = {}) {
            row.id && (this.model = { ...row })
            this.visible = true
        },
        remove(id) {
            this.$http_del('/xxx/', id, {
                confirm: false
            })
                .then(() => {
                    this.$refs.mTable.refresh()
                })
                .catch(() => {})
        },
        async submit() {
            const res = await this.$http_push('/xxx/', this.model.id, {
                data: this.model,
                self: this,
                loading: 'submitLoading'
            })
            if (!res) return
            this.$refs.mTable.refresh()
            this.formVisible = false
        }
    }
}
</script>
