import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapse: false
    },
    mutations: {
        SET_COLLAPSE(state, flag) {
            state.collapse = flag
        }
    },
    actions: {}
})
