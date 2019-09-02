<template>
    <div>
        <p>资源管理</p>
        <el-row>
            <el-button @click="get">试试</el-button>
        </el-row>
        <el-row>
            <el-button @click="go">去角色管理</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        go() {
            this.$router.push({
                name: 'system-role',
                params: {
                    id: 'abc-123',
                    comp: 'Opt',
                    view: true
                }
            })
        },
        get() {
            console.log(this.$route)
        }
    }
}
</script>
