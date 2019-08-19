<template>
    <section class="login">
        <el-form>
            <el-form-item label="账号">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm">登录哦</el-button>
        </el-form>
    </section>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            form: {}
        }
    },
    methods: {
        submitForm() {
            sessionStorage.setItem('token', 'token')
            this.$message({
                message: '登录成功',
                type: 'success'
            })
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    height: 100vh;
    background-color: #283443;
    overflow: hidden;
    .el-form {
        width: 600px;
        margin: 20px auto;
    }
}
</style>
