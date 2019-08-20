<template>
    <div class="m-table">
        <el-table
            v-bind="$attrs"
            v-on="$listeners"
            ref="elTable"
            :data="tableList"
            :stripe="stripe"
            @sort-change="sortChange"
            v-loading="loading"
            element-loading-text="拼命加载中..."
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
        >
            <slot></slot>
        </el-table>
        <el-pagination
            v-if="page"
            :total="total"
            :current-page.sync="currentPage"
            :page-size="pageSize"
            @current-change="getList('current-change')"
            @size-change="sizeChange"
            layout="total, sizes, prev, pager, next, jumper"
        >
        </el-pagination>
        <i v-if="renovate" class="renovate el-icon-refresh-right" :style="renovateStyle" @click="getList('renovate')"></i>
    </div>
</template>

<script>
export default {
    name: 'mTable',
    inheritAttrs: false,
    props: {
        // 是否有斑马线
        stripe: {
            type: Boolean,
            default: true
        },
        // 是否有分页
        page: {
            type: Boolean,
            default: true
        },
        // 是否有刷新按钮
        renovate: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            conditions: {}, // 查询条件
            total: 0, // 总条数
            totalPages: 0, // 总页数
            currentPage: 1, // 当前页码
            pageSize: 10, // 每页显示多少条
            tableList: [{}, {}], // 列表数据
            loading: false, // 加载中
            getted: false, // 是否请求完了数据
            sortStr: this.sortRules // 排序信息
        }
    },
    computed: {
        renovateStyle() {
            const table = document.querySelector('.el-table')
            const WRAPPER_TOP = table && table.getBoundingClientRect().top
            return {
                position: 'absolute',
                right: '20px',
                fontSize: '20px',
                cursor: 'pointer',
                top: WRAPPER_TOP + 12 + 'px'
            }
        }
    },
    methods: {
        getList() {
            this.loading = true
            setTimeout(() => {
                this.tableList = [{}, {}, {}]
                this.loading = false
            }, 2000)
        },
        sizeChange() {},
        sortChange() {}
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins';
.m-table {
    @include clearfix;
    position: relative;
}
</style>
