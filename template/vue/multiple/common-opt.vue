<template>
    <section>
        <m-head title="未定义标题" back></m-head>
        <m-form ref="form" :model="model" :rules="rules" v-loading="loading">
            <el-form-item label="测试项目1：" prop="x">
                <m-input v-model="model.x"></m-input>
            </el-form-item>
            <el-form-item label="测试项目2：" prop="y">
                <m-input v-model="model.y"></m-input>
            </el-form-item>
            <el-form-item label="测试项目3：" prop="z">
                <m-select v-model="model.z" :init-data="() => [{ label: 1, value: 1 }]"></m-select>
            </el-form-item>
            <template #buttons>
                <el-button type="primary" @click="submit" :loading="submitLoading">提交</el-button>
            </template>
        </m-form>
    </section>
</template>

<script>
import { compOpt } from '@/mixins'
export default {
    mixins: [compOpt],
    data() {
        return {
            loading: false,
            submitLoading: false,
            model: {},
            rules: {
                xxx: { required: true, message: '此项为必填项' }
            }
        }
    },
    created() {
        this.id && this.getData()
    },
    methods: {
        async getData() {
            const res = await this.$http_get('xxx', {
                self: this,
                loading: 'loading'
            })
            if (!res) return
            this.model = res.content
        },
        submit() {
            this.$refs.form.validate().then(async () => {
                const res = await this.$http_push('yyy', this.model.id, {
                    data: this.model,
                    self: this,
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
