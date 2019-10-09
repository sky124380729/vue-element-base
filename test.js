const fs = require('fs')
// let temp = ''
const x = `
    {
        path: 'fn',
        component: () => import('pages/test/fn'),
        name: 'test-fn',
        meta: { title: 'fn组件', menu: true }
    } 
    /* SLOT */
`
const path = `${__dirname}/src/router/modules/test2.js`
let temp = ''
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        temp = `export default [
    /* SLOT */
]
`
    } else {
        temp = data
    }
    fs.writeFileSync(path, temp.replace(/\n {4}\/\* SLOT \*\//g, `${err ? '' : ','}${x}`), 'utf8')
})
