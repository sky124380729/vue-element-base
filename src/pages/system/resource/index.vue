<template>
    <el-tree show-checkbox :data="resourceTree" :props="defaultProps" :render-content="renderContent">
        <p class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span class="name" :class="{ isRoot: data.name.includes('-') }">{{ data.name }}</span>
        </p>
    </el-tree>
</template>

<script>
import { asyncRouter } from '@/router'
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
        resourceTree() {
            const filterRouter = routes => {
                return routes.filter(route => {
                    if (route.children && route.children.length) {
                        route.children = filterRouter(route.children)
                    }
                    return route.meta && route.meta.menu
                })
            }
            return filterRouter(this.$deepClone(asyncRouter))
        }
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
