import { deepClone } from './tools'

export default Vue => {
    // 深拷贝
    Vue.prototype.$deepClone = deepClone
}
