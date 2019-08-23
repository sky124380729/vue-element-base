<template>
    <div>
        <el-tree
            class="tree"
            :data="data"
            show-checkbox
            :expand-on-click-node="false"
            default-expand-all
            :render-content="renderContent"
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps"
        >
        </el-tree>
        <el-dialog title="菜单管理" :visible.sync="menuVisible" width="520px">
            <el-form label-position="right" label-width="100px">
                <el-form-item label="菜单名称：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="菜单路径：">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="菜单图标：">
                    <el-input></el-input>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
// import { generateUUID } from '@/utils/tools'
export default {
    methods: {
        renderContent(h, { node, data, store }) {
            return h(
                'span',
                {
                    style: {
                        display: 'flex',
                        width: '100%',
                        alignItems: 'center',
                        fontSize: '12px',
                        marginLeft: '20px'
                    }
                },
                [
                    data.isEditing
                        ? h(
                              'el-input',
                              {
                                  class: {
                                      name: true
                                  },
                                  props: {
                                      value: data.label,
                                      size: 'mini'
                                  },
                                  on: {
                                      input(val) {
                                          data.label = val
                                      }
                                  },
                                  nativeOn: {
                                      keyup(e) {
                                          //   console.log(code)
                                          if (e.keyCode === 13) {
                                              //   console.log('回车了')
                                              data.isEditing = false
                                          }
                                      }
                                  }
                              },
                              data.label
                          )
                        : h(
                              'span',
                              {
                                  class: {
                                      name: true
                                  },
                                  style: {
                                      flex: 1
                                  },
                                  on: {
                                      dblclick() {
                                          data.isEditing = true
                                      }
                                  }
                              },
                              data.label
                          ),
                    h(
                        'span',
                        {
                            style: {
                                marginLeft: 'auto'
                            }
                        },
                        [
                            node.level === 1
                                ? h('el-button', {
                                      props: {
                                          type: 'primary',
                                          icon: 'el-icon-plus',
                                          size: 'mini',
                                          plain: true
                                      },
                                      on: {
                                          click: () => {
                                              this.append(data)
                                          }
                                      },
                                      style: {
                                          padding: '3px 25px',
                                          marginLeft: '20px'
                                      }
                                  })
                                : [
                                      h('el-button', {
                                          props: {
                                              //   circle: true,
                                              type: 'primary',
                                              icon: 'el-icon-plus',
                                              size: 'mini',
                                              plain: true
                                          },
                                          on: {
                                              click: () => {
                                                  this.append(data)
                                              }
                                          },
                                          style: {
                                              padding: '3px 8px',
                                              marginLeft: '20px'
                                          }
                                      }),
                                      h('el-button', {
                                          props: {
                                              //   circle: true,
                                              type: 'danger',
                                              icon: 'el-icon-minus',
                                              size: 'mini',
                                              plain: true
                                          },
                                          on: {
                                              click: () => {
                                                  this.remove(node, data, store)
                                              }
                                          },
                                          style: {
                                              padding: '3px 8px',
                                              marginLeft: '4px'
                                          }
                                      })
                                  ]
                        ]
                    )
                ]
            )
        },
        append(data) {
            // const newChild = { id: generateUUID(), label: 'testtest', children: [] }
            // if (!data.children) {
            //     this.$set(data, 'children', [])
            // }
            // data.children.push(newChild)
            this.menuVisible = true
        },
        remove(node, data) {
            // const parent = node.parent
            // const children = parent.data.children || parent.data
            // const index = children.findIndex(d => d.id === data.id)
            // children.splice(index, 1)
            this.$confirm('确认删除吗?', '提示', {
                type: 'warning'
            })
                .then(() => {})
                .catch(() => {})
        }
    },

    data() {
        return {
            menuVisible: false,
            data: [
                {
                    label: '系统资源管理',
                    children: [
                        {
                            id: 1,
                            label: '一级 1',
                            isEditing: true,
                            children: [
                                {
                                    id: 4,
                                    label: '二级 1-1',
                                    children: [
                                        {
                                            id: 9,
                                            label: '三级 1-1-1'
                                        },
                                        {
                                            id: 10,
                                            label: '三级 1-1-2'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 2,
                            label: '一级 2',
                            children: [
                                {
                                    id: 5,
                                    label: '二级 2-1'
                                },
                                {
                                    id: 6,
                                    label: '二级 2-2'
                                }
                            ]
                        },
                        {
                            id: 3,
                            label: '一级 3',
                            children: [
                                {
                                    id: 7,
                                    label: '二级 3-1'
                                },
                                {
                                    id: 8,
                                    label: '二级 3-2'
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.el-tree {
    width: 400px;
    ::v-deep .el-tree-node__content {
        height: 30px;
    }
}
</style>
