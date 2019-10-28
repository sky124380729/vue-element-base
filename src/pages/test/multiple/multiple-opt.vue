<template>
    <section>
        <m-head title="未定义标题" back></m-head>
        <m-form ref="form" :model="model" :rules="rules" v-loading="loading">
            <el-form-item label="测试项目1：" prop="a">
                <m-input v-model="model.a"></m-input>
            </el-form-item>
            <el-form-item label="测试项目2：" prop="b">
                <m-input v-model="model.b"></m-input>
            </el-form-item>
            <el-form-item label="测试项目3：" prop="c">
                <m-select v-model="model.c" :init-data="() => [{ label: 1, value: 1 }]"></m-select>
            </el-form-item>
            <template #buttons>
                <el-button type="primary" size="mini" @click="submit" :loading="submitLoading">提交</el-button>
            </template>
        </m-form>
    </section>
</template>

<script>
import { Debounce } from '@/utils/tools'
import { compOpt } from '@/mixins'
export default {
    mixins: [compOpt],
    data() {
        const checkCode = async (rule, value, callback) => {
            const res = await this.$http.post('/exists/test/multiple', {
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
            loading: false,
            submitLoading: false,
            model: {},
            rules: {
                a: [{ required: true, message: '此项为必填项' }, { validator: Debounce(checkCode) }]
            }
        }
    },
    created() {
        this.id && this.getData()
    },
    methods: {
        async getData() {
            const res = await this.$http.get('/test/multiple/', {
                vm: this,
                loading: 'loading'
            })
            if (!res) return
            this.model = res.content
        },
        submit() {
            this.$refs.form.validate().then(async () => {
                const res = await this.$http[this.model.id ? 'put' : 'post']('/test/multiple', {
                    data: this.model,
                    vm: this,
                    loading: 'submitLoading'
                })
                if (!res) return
                setTimeout(() => {
                    this.switchPage('Index')
                }, 500)
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>
