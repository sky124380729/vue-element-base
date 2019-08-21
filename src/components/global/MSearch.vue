<script>
export default {
    name: 'mSearch',
    props: {
        queryArr: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            conditions: {}
        }
    },
    created() {
        // 设置响应属性
        for (let i in this.queryArr) {
            const v = this.queryArr[i]
            v.key && this.$set(this.conditions, v.key, null)
        }
    },
    render(createElement) {
        return createElement(
            'div',
            {
                class: 'm-search'
            },
            this.queryArr
                .map(v => {
                    return createElement(
                        v.tag,
                        {
                            class: 'm-search__item',
                            style: {
                                width: (v.width || 200) + 'px'
                            },
                            attrs: {
                                placeholder: v.ph
                            },
                            props: {
                                value: this.conditions[v.key],
                                // 快捷选项
                                clearable: v.clearable !== false,
                                editable: v.editable || false,
                                // 组件自己的props选项
                                ...v.props
                            },
                            on: {
                                input: val => {
                                    this.conditions[v.key] = val
                                }
                            }
                        },
                        this.setChildren(v, createElement)
                    )
                })
                .concat([
                    createElement(
                        'el-button',
                        {
                            class: 'm-search__btn',
                            props: {
                                type: 'primary'
                            },
                            on: {
                                click: this.sendQuery
                            }
                        },
                        '查询'
                    ),
                    createElement(
                        'el-button',
                        {
                            class: 'm-search__btn',
                            props: {
                                type: 'danger'
                            },
                            on: {
                                click: this.sendClear
                            }
                        },
                        '清空'
                    )
                ])
                .concat([
                    this.$scopedSlots.default
                        ? createElement(
                              'div',
                              {
                                  class: 'm-search__slots'
                              },
                              this.$scopedSlots.default()
                          )
                        : null
                ])
        )
    },
    renderError(createElement, err) {
        return createElement('pre', { style: { color: 'red' } }, err.stack)
    },
    methods: {
        sendQuery() {
            this.$emit('getConditions', this.conditions)
        },
        sendClear() {
            this.queryArr.forEach(v => {
                if (v.clearable !== false) {
                    this.conditions[v.key] = null
                }
            })
            this.$emit('getConditions', this.conditions)
        },
        setChildren(v, createElement) {
            if (!v.tag.includes('select')) return v.text || v.tag
            return v.options.map(sv =>
                createElement('el-option', {
                    props: {
                        label: sv.label,
                        value: sv.value
                    }
                })
            )
        }
    }
}
</script>

<style lang="scss" scoped>
.m-search {
    display: flex;
    justify-content: flex-end;
    &__item {
        margin-right: 10px;
    }
    &__slots {
        margin-left: 10px;
    }
}
</style>
