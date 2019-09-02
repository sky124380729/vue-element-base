export default Vue => {
    const deepClone = obj => {
        let result = Array.isArray(obj) ? [] : {}
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    result[key] = deepClone(obj[key]) // 递归复制
                } else {
                    result[key] = obj[key]
                }
            }
        }
        return result
    }
    // 深拷贝
    Vue.prototype.$deepClone = deepClone
}
