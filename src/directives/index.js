import Waves from './wave/wave.js'
import dialogDrag from './dialog-drag'
export default Vue => {
    /* clear指令，用于该表单在销毁之后清空表单内部v-model的绑定值 */
    Vue.directive('clear', {
        unbind(el, binding, vnode) {
            let initVal =
                {
                    Array: '[]',
                    Object: '{}'
                }[Object.prototype.toString.call(vnode.data.model.value).slice(8, -1)] || null
            let propArr = ('context.' + vnode.data.model.expression).split('.')
            propArr.reduce((obj, key, index) => {
                if (index === propArr.length - 1) {
                    obj[key] = initVal
                }
                return obj[key]
            }, vnode)
        }
    })
    // 水波纹效果
    Vue.directive('wave', Waves)
    // 拖拽弹框
    Vue.directive('dialog-drag', dialogDrag)
}
