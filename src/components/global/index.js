import Vue from 'vue'
const files = require.context('./', false, /(\.js|\.vue)$/)
files.keys().forEach(key => {
    if (key === './index.js') return
    const com = files(key).default
    Vue.component(com.name, com)
})
