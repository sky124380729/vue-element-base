<template>
    <div class="m-table" :class="{ hasSearch: queryArr.length }">
        <m-search v-if="queryArr.length" :queryArr="queryArr" @getConditions="getConditions"></m-search>
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
        <i v-if="renovate" class="renovate el-icon-refresh-right" @click="getList('renovate')"></i>
    </div>
</template>

<script>
export default {
    name: 'mTable',
    inheritAttrs: false,
    props: {
        // 是否带有查询条件
        queryArr: {
            type: Array,
            default: () => []
        },
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
    methods: {
        getList() {
            this.loading = true
            setTimeout(() => {
                this.tableList = Array.apply(this, { length: Math.ceil(Math.random() * 10) })
                this.loading = false
            }, 1000)
        },
        getConditions(conditions) {
            this.conditions = conditions
            this.getList('getConditions')
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
    .m-search {
        margin-bottom: 15px;
    }
    .renovate {
        position: absolute;
        top: 13px;
        right: 18px;
        font-size: 20px;
        font-weight: bold;
        color: #b79ba8;
        transition: color 0.6s;
        cursor: pointer;
        &:hover {
            color: $-color--primary;
        }
    }
}
.m-table.hasSearch {
    .renovate {
        top: 60px;
    }
}
</style>
