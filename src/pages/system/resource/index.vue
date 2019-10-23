<template>
    <el-tree :data="menuList" :props="defaultProps" :render-content="renderContent"></el-tree>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'system-resource',
    data() {
        return {
            defaultProps: {
                children: 'children',
                label(data) {
                    return data.meta && data.meta.title
                }
            }
        }
    },
    computed: {
        ...mapGetters(['menuList'])
    },
    methods: {
        renderContent(h, { node, data }) {
            return (
                <p class='custom-tree-node'>
                    <span>{node.label}</span>
                    <span class={{ name: true, isRoot: data.name.includes('-') }}>{data.name}</span>
                </p>
            )
        }
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/variables';
.el-tree {
    width: 600px;
    margin-top: 10px;
    ::v-deep {
        .custom-tree-node {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            padding-right: 8px;
            .name {
                color: $-color--theme;
                &.isRoot {
                    color: rgb(255, 208, 75);
                }
            }
        }
    }
}
</style>
