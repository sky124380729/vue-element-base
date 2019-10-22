export default function Hoc(comp, mixins) {
    return {
        mixins: [mixins],
        props: comp.props,
        render(h) {
            // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组
            const slots = Object.keys(this.$scopedSlots)
                .reduce((arr, key) => arr.concat(this.$scopedSlots[key]()), [])
                .map(vnode => {
                    vnode.context = this._self //绑定到高阶组件上
                    return vnode
                })

            return h(
                comp,
                {
                    on: this.$listeners,
                    attrs: this.$attrs,
                    props: this.$props
                },
                slots
            ) // 将 slots 作为 h 函数的第三个参数
        }
    }
}
