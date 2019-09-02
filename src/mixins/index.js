// bus页面混入
export const compBus = {
    provide() {
        return {
            bus: this
        }
    },
    data(vm) {
        const {
            $route: { params }
        } = vm
        return {
            comp: (params && params.comp) || 'Index',
            id: params && params.id,
            view: params && params.view
        }
    }
}

// bus主页混入
export const compIndex = {
    name: 'index',
    inject: {
        page: {
            from: 'bus',
            default: null
        }
    }
}

// bus操作页混入
export const compOpt = {
    props: {
        id: String
    },
    inject: {
        page: {
            from: 'bus',
            default: null
        }
    }
}
